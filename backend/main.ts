import 'reflect-metadata';
import { fixModuleAlias } from './utils/fix-module-alias';
fixModuleAlias(__dirname);
import { appConfig } from '@base/config/app';
import { useContainer as routingControllersUseContainer, useExpressServer, getMetadataArgsStorage } from 'routing-controllers';
import { loadHelmet } from '@base/utils/load-helmet';
import { Container } from 'typedi';
import { createConnection, useContainer as typeormOrmUseContainer } from 'typeorm';
import { Container as containerTypeorm } from 'typeorm-typedi-extensions';
import { useSocketServer, useContainer as socketUseContainer } from 'socket-controllers';
import * as path from 'path';
import express from 'express';
import bodyParser from 'body-parser';

export class App {
  private app: express.Application = express();
  private port: Number = appConfig.port;

  public constructor() {
    this.bootstrap();
  }

  public async bootstrap() {
    this.useContainers();
    await this.typeOrmCreateConnection();
    this.serveStaticFiles();
    this.setupMiddlewares();
    this.registerSocketControllers();
    this.registerRoutingControllers();
    this.registerDefaultHomePage();
  }

  private useContainers() {
    routingControllersUseContainer(Container);
    typeormOrmUseContainer(containerTypeorm);
    socketUseContainer(Container);
  }

  private async typeOrmCreateConnection() {
    try {
      await createConnection();
    } catch (error) {
      console.log('Caught! Cannot connect to database: ', error);
    }
  }

  private serveStaticFiles() {
    this.app.use('/public', express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));
  }

  private setupMiddlewares() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    loadHelmet(this.app);
  }

  private registerSocketControllers() {
    const server = require('http').Server(this.app);
    const io = require('socket.io')(server);

    this.app.use(function (req: any, res: any, next) {
      req.io = io;
      next();
    });

    server.listen(this.port, () => console.log(`🚀 Server started at http://localhost:${this.port}\n🚨️ Environment: ${process.env.NODE_ENV}`));

    useSocketServer(io, {
      controllers: [__dirname + appConfig.controllersDir],
    });
  }

  private registerRoutingControllers() {
    useExpressServer(this.app, {
      validation: { stopAtFirstError: true },
      cors: true,
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
