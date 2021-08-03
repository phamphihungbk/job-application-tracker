import * as dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

export function env(key: string, defaultValue: null | string = null): string {
    return process.env[key] ?? (defaultValue as string);
}
