const { DataTypes } = require('sequelize');
const connection = require('../../configs/connection')
const Project = require('./ProjectsModel')

const Timer = connection.sequelize.define('timer', {
name: {
    type: DataTypes.STRING,
    allowNull: false
    },
initialDate: {
    type: DataTypes.DATE,
    allowNull: false,
},
finalDate: {
    type: DataTypes.DATE,
    allowNull: false,
},
idProject: {
    type: DataTypes.INTEGER,
    references: {model: 'projects' , key: 'id'},
    onDelete: 'CASCADE',
    allowNull: false
}
});
Timer.belongsTo(Project, { foreignKey: 'idProject', allowNull: false });
module.exports = Timer
//Timer.sync({force: true})