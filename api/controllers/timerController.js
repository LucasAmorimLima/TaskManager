const Timer = require('../models/TimerModel')
const {timeDifference} = require('../services/timeDifference');
const { updateStatusProject } = require('../services/projectDateUpdate');
   exports.index = async (req, res,next) => {
        await Timer.findAll().then((result)=>{
            
            const values = {'result':result,'timeDifference': timeDifference(result)}
            return res.status(200).json(values)
            
        }).catch((error)=>{
            return res.status(400).json(error)
        }) 
    }  

    exports.show = async (req, res,next) => {
        await Timer.findAll({where: {id: req.params.id}}).then((result)=>{
            return res.status(200).json(result)
        }).catch((error)=>{
            return res.status(400).json(error)
        }) 
    };
    exports.insert  =  async (req, res,next) => {  
        const {name,initialDate,finalDate,idProject} = req.body     
    
            await  Timer.create({
                name: name,
                finalDate: finalDate,
                initialDate: initialDate,
                idProject : idProject
            }).then((result)=>{
               updateStatusProject(idProject,result) 
               return res.status(200).json(result)

                //implementation
            }).catch((error)=>{
                return res.status(400).json(error)
            })
    };
    
    exports.destroy = async (req, res,next) => {

        await Timer.destroy({where: {id:req.body.id}}).then((result)=>{
            return res.status(200).json(result)
        }).catch ((error) =>{
            return res.status(400).json(error)
        })
    };  

    
    
    