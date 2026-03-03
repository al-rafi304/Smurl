import dotenv from 'dotenv';

dotenv.config();

export const DEVELOPMENT = process.env.NODE_ENV === 'development';
export const TEST = process.env.NODE_ENV === 'test';

export const URL_TTL: number = process.env.URL_TTL ? Number(process.env.URL_TTL) : 86400;
export const URL_ALPHABETS = process.env.URL_ALPHABETS ? String(process.env.URL_ALPHABETS) : "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
export const URL_LENGTH = process.env.URL_LENGTH ? Number(process.env.URL_LENGTH) : 6;

export const MONGO_URI = process.env.MONGO_URI

export const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://postgres:password@localhost:5432/smurl';
export const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379';

export const JWT = {
    ACCESS_SECRET: process.env.JWT_ACCESS_SECRET || 'secret',
    REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || 'refresh_secret',
    ACCESS_EXPIRES_IN: process.env.JWT_ACCESS_EXPIRES_IN || '15m',
    REFRESH_EXPIRES_IN: process.env.JWT_REFRESH_EXPIRES_IN || '7d',
};

export const AUTH = {
    OTP_EXPIRES_IN: process.env.OTP_EXPIRES_IN ? Number(process.env.OTP_EXPIRES_IN) : 300,
    OTP_MAX_ATTEMPTS: process.env.OTP_MAX_ATTEMPTS ? Number(process.env.OTP_MAX_ATTEMPTS) : 5,
};

export const SERVER_ENV = {
    HOST: process.env.SERVER_HOST || 'localhost',
    PORT: process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 3000
};