"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const db_1 = require("./../db/db");
const sequelize_1 = require("sequelize");
class User extends sequelize_1.Model {
}
exports.User = User;
User.init({
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    url: { type: sequelize_1.DataTypes.STRING },
    description: { type: sequelize_1.DataTypes.TEXT },
    thumbnailUrl: { type: sequelize_1.DataTypes.STRING },
    title: { type: sequelize_1.DataTypes.STRING },
    duration: { type: sequelize_1.DataTypes.STRING },
    seqNo: { type: sequelize_1.DataTypes.INTEGER },
    courseId: { type: sequelize_1.DataTypes.INTEGER },
}, {
    sequelize: db_1.sequelize,
    tableName: 'Users',
});
//# sourceMappingURL=User.js.map