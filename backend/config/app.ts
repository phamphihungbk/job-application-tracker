import { env } from '@base/src/utils/env';
import { toBool } from '@base/src/utils/to-bool';

function getAppPath() {
  let currentDir = __dirname;
  currentDir = currentDir.replace('/config', '');

  return currentDir;
}

export const appConfig = {
  appEnv: env('APP_ENV') || 'development',
  isProduction: env('APP_ENV') === 'production',
  isStaging: env('APP_ENV') === 'staging',
  isDevelopment: env('APP_ENV') === 'development',
  name: env('APP_NAME'),
  port: Number(env('APP_PORT')),
  routePrefix: env('APP_ROUTE_PREFIX'),
  url: env('APP_URL'),
  appPath: getAppPath(),
  entitiesDir: env('TYPEORM_ENTITIES_DIR'),
  controllersDir: env('CONTROLLERS_DIR'),
  middlewaresDir: env('MIDDLEWARES_DIR'),
  resolversDir: env('RESOLVERS_DIR'),
};
