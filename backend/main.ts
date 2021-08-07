import 'reflect-metadata';
import { fixModuleAlias } from './src/utils/fix-module-alias';
fixModuleAlias(__dirname);
import { appConfig } from '@base/config/app';
import { useContainer as routingControllersUseContainer, useExpressServer } from 'routing-controllers';
import { loadHelmet } from '@base/src/utils/load-helmet';
import { Container } from 'typedi';
import { createConnection, useContainer as typeormOrmUseContainer } from 'typeorm';
import { Container as containerTypeorm } from 'typeorm-typedi-extensions';
import { useSocketServer, useContainer as socketUseContainer } from 'socket-controllers';
import express from 'express';
import bodyParser from 'body-parser';

export class App {
  private app: express.Application = express();
  private port: Number = appConfig.port;
  private hostname: String = appConfig.hostname;

  public constructor() {
    this.bootstrap();
  }

  private async bootstrap() {
    this.useContainers();
    await this.setupConnection();
    this.setupMiddlewares();
    this.registerSocketControllers();
    this.registerRoutingControllers();
    this.registerDefaultHomePage();
  }

  private useContainers(): void {
    routingControllersUseContainer(Container);
    typeormOrmUseContainer(containerTypeorm);
    socketUseContainer(Container);
  }

  private async setupConnection() {
    try {
      await createConnection();
    } catch (error) {
      console.log('Caught! Cannot connect to database: ', error);
    }
  }

  private setupMiddlewares() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    loadHelmet(this.app);
  }

  private registerSocketControllers() {
    const server = require('http').Server(this.app);
    const io = require('socket.io')(server);

    this.app.use(function(req: any, res: any, next) {
      req.io = io;
      next();
    });

    server.listen(this.port, this.hostname, () => console.log(`🚀 Server started at ${this.hostname}:${this.port}\n🚨️ Environment: ${process.env.APP_ENV}`));

    useSocketServer(io, {
      controllers: [__dirname + appConfig.controllersDir],
    });
  }

  private registerRoutingControllers() {
    useExpressServer(this.app, {
      validation: { stopAtFirstError: true },
      cors: {
        origin: '*',
        methods: 'GET,PUT,POST,DELETE',
      },
      classTransformer: true,
      defaultErrorHandler: false,
      routePrefix: appConfig.routePrefix,
      controllers: [__dirname + appConfig.controllersDir],
      middlewares: [__dirname + appConfig.middlewaresDir],
    });
  }

  private registerDefaultHomePage() {
    this.app.get('/', (req, res) => {
      res.json({
        title: appConfig.name,
        mode: appConfig.appEnv,
        date: new Date(),
      });
    });
  }
}

new App();
