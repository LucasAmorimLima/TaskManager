const Projects = require('../models/ProjectsModel')
const moment = require('moment')

   exports.index = async (req, res,next) => {
        await Projects.findAll().then((result)=>{
            return res.status(200).json(result)
            
        }).catch((error)=>{
            return res.status(400).json(error)
            
        }) 
    }  

    exports.show = async (req, res,next) => {
        await Projects.findAll({where: {id: req.params.id}}).then((result)=>{
            res.status(200).json(result)
            
        }).catch((error)=>{
            return res.status(400).json(error)
            
        }) 
    };
    exports.insert  =  async (req, res,next) => {  
        const {name} = req.body     
        const data = moment.utc("0000-01-01 00:00:00") 

            await  Projects.create({
                name: name,
                status: data,
            }).then((result)=>{
               return res.status(200).send(result)
            }).catch((error)=>{
                return res.json(error)
                
            })
    };
    
    exports.destroy = async (req, res,next) => {

        await Users.destroy({where: {id:req.body.id}}).then((result)=>{
            return res.status(200).send(result)
        }).catch ((error) =>{
            return res.status(400).json(error)
        })
    };  

    
    
    