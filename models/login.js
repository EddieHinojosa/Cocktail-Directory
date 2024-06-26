const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Login extends Model { }

Login.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    passwd: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    dob: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Login',
    tableName: 'login',
    schema: 'public',
    timestamps: false
});

module.exports = { Login };