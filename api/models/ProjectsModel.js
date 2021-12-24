const { DataTypes } = require('sequelize');
const connection = require('../../configs/connection')


const Projects = connection.sequelize.define('project', {
name: {
    type: DataTypes.STRING,
    allowNull: false
    },
status: {
    type: DataTypes.DATE,
    allowNull: false,
    }
});
module.exports = Projects
//Projects.sync({force: true})