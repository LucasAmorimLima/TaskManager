const {generateJWT} = require('../services/generateJWT')
const Users = require('../models/UsersModel')
   exports.index = async (req, res,next) => {
        await Users.findAll().then((result)=>{
            res.status(200)
            //implementation
        }).catch((error)=>{
            res.send(error)
            //implementation
        }) 
    }  

    exports.show = async (req, res,next) => {
        await Users.findAll({where: {id: req.params.id}}).then((result)=>{
            res.status(200)
            //implementation
        }).catch((error)=>{
            res.send(error)
            //implementation
        }) 
    };
    exports.insert  =  async (req, res,next) => {  
        const {name,password,email} = req.body     
       

            await  Users.create({
                name: name,
                password: password,
                email: email,
            }).then((result)=>{
               return res.status(200).send(generateJWT({id :Users.id}))
                //implementation
            }).catch((error)=>{
                console.log(error);
                //res.json(error)
            })
    };
    
    exports.destroy = async (req, res,next) => {

        await Users.destroy({where: {id:req.body.id}}).then((result)=>{
            return res.status(200).send(result)
        }).catch ((error) =>{
            res.send(error)
            //implementation
        })
    };  

    
    
    