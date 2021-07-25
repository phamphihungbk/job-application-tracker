import { sequelize } from './../db/db';
import { Model, DataTypes } from 'sequelize';

export class User extends Model {
    public id!: number;
    public url!: string;
    public title!: string;
    public description!: string;
    public thumbnailUrl!: string;
    public duration!: string;
    public seqNo!: number;
    public courseId!: number;
}

User.init(
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        url: { type: DataTypes.STRING },
        description: { type: DataTypes.TEXT },
        thumbnailUrl: { type: DataTypes.STRING },
        title: { type: DataTypes.STRING },
        duration: { type: DataTypes.STRING },
        seqNo: { type: DataTypes.INTEGER },
        courseId: { type: DataTypes.INTEGER },
    },
    {
        sequelize,
        tableName: 'Users',
    },
);
