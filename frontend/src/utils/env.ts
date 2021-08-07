import * as dotenv from 'dotenv';
dotenv.config();

export function env(key: string, defaultValue: null | string = null): string {
  return process.env[key] ?? (defaultValue as string);
}
