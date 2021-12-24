const Sequelize = require('sequelize') 
const {BANK,USER,PASSWORD,HOST,DIALECT} = require('./constants/configDataBase')
const sequelize = new Sequelize(BANK,USER,PASSWORD,{
        host: HOST,
        dialect: DIALECT
    })
    sequelize.authenticate().then(function(){
        console.log("Banco conectado")
    }).catch(function(err){
        console.log("Falha ao logar no Servidor "+err)
    })
 
module.exports = {
    sequelize: sequelize,
    Sequelize: Sequelize

}