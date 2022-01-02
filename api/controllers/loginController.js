const {generateJWT} = require('../services/generateJWT')
const Users = require('../models/UsersModel')


exports.authentication  =  async (req, res, next) => {  
    const {password,email} = req.body
  
   
    await Users.findAll({where: {password: password,email: email}}).then((result)=>{           
        return res.status(200).json({auth: true, id:result[0].id, name:result[0].name, token: generateJWT(result[0].id)})                    
    }).catch((error)=>{
        res.status(200).json(
            {
                error
            }
        )
    })
};

 



