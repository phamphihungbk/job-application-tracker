import { env } from '@utils/env';

export const dbConfig = {
    dbConnection: env('DB_CONNECTION'),
    dbHost: env('DB_HOST'),
    dbPort: env('DB_PORT'),
    dbDatabase: env('DB_NAME'),
    dbUsername: env('DB_USER'),
    dbPassword: env('DB_PASSWORD'),
};
