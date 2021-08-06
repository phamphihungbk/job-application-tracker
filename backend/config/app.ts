import { env } from '@base/src/utils/env';

function getAppPath() {
  let currentDir = __dirname;
  currentDir = currentDir.replace('/config', '');

  return currentDir;
}

export const appConfig = {
  appEnv: env('APP_ENV') || 'dev',
  isProduction: env('APP_ENV') === 'prod',
  isStaging: env('APP_ENV') === 'staging',
  isDevelopment: env('APP_ENV') === 'dev',
  name: env('APP_NAME'),
  port: Number(env('BACKEND_PORT')),
  routePrefix: env('BACKEND_ROUTE_PREFIX'),
  url: env('BACKEND_URL'),
  appPath: getAppPath(),
  entitiesDir: env('TYPEORM_ENTITIES_DIR'),
  controllersDir: env('CONTROLLERS_DIR'),
  middlewaresDir: env('MIDDLEWARES_DIR'),
  resolversDir: env('RESOLVERS_DIR'),
};
