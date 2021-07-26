"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RateLimit = require("express-rate-limit");
const env = process.env.NODE_ENV || 'dev';
const rateLimitRequest = Number(process.env.RATE_LIMIT_TIME) || 15;
const rateLimitTime = Number(process.env.RATE_LIMIT_REQUEST) || 100;
exports.default = () => {
    if (env === 'production') {
        return new RateLimit({
            windowMs: rateLimitTime * 60 * 1000,
            max: rateLimitRequest,
            delayMs: 0,
            handler: 'Rate limt exceeded, please try again later some time.',
        });
    }
    return new RateLimit({
        windowMs: 5 * 60 * 1000,
        max: 3000,
        delayMs: 0,
        handler: 'Rate limt exceeded, please try again later some time.',
    });
};
//# sourceMappingURL=rateLimit.js.map