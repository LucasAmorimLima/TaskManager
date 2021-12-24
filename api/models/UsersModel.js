const { DataTypes } = require('sequelize');
const connection = require('../../configs/connection')


const User = connection.sequelize.define('user', {
name: {
    type: DataTypes.STRING,
    allowNull: false
    },
email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique : true
    },
password: {
    type: DataTypes.STRING,
    allowNull: false
    },
});
module.exports = User
//User.sync({force: true})