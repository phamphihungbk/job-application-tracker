"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const dbUrl = process.env.DB_URL || '';
const nodeEnv = process.env.NODE_ENV || '';
if (!dbUrl) {
    console.log('Can not find env file');
    process.exit(0);
}
let optionsObj = { benchmark: true, logging: console.log };
if (nodeEnv && nodeEnv === 'production') {
    optionsObj = { logging: false };
}
const options = optionsObj;
exports.sequelize = new sequelize_1.Sequelize(dbUrl, options);
exports.sequelize
    .authenticate()
    .then(() => {
    console.log('Connection has been established successfully..');
})
    .catch(err => {
    console.error('Unable to connect to the database:', err);
});
//# sourceMappingURL=db.js.map