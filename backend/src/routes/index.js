"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Job_1 = require("./Job");
const User_1 = require("./User");
class Routes {
    constructor(app) {
        // jobs routes
        app.use('/api/v1/jobs', Job_1.default);
        // users routes
        app.use('/api/v1/users', User_1.default);
    }
}
exports.default = Routes;
//# sourceMappingURL=index.js.map