const {generateJWT} = require('../services/generateJWT')
const Users = require('../models/UsersModel')
   exports.index = async (req, res,next) => {
        await Users.findAll().then((result)=>{
            return res.status(200).json(result)
            
        }).catch((error)=>{
            return res.status(400).json(error)
        }) 
    }  

    exports.show = async (req, res,next) => {
        await Users.findAll({where: {id: req.params.id}}).then((result)=>{
            return res.status(200).json(result)
        }).catch((error)=>{
            return res.status(400).json(error)
        }) 
    };
    exports.insert  =  async (req, res) => {  
        const {name,password,email} = req.body     
       
            await  Users.create({
                name: name,
                password: password,
                email: email,
            }).then((result)=>{
               return res.status(200).json({
                JWT: generateJWT({id :Users.id}),
                result: result
               })
                
            }).catch((error)=>{
                return res.status(400).json(error)
            })
    };
    
    exports.destroy = async (req, res,next) => {

        await Users.destroy({where: {id:req.body.id}}).then((result)=>{
            return res.status(200).send(result)
        }).catch ((error) =>{
            return res.status(400).json(error)
        })
    };  

    
    
    