const Timer = require('../models/TimerModel')
const {timeDifference} = require('../services/timeDifference');
const { updateStatusProject } = require('../services/projectDateUpdate');
   exports.index = async (req, res,next) => {
        await Timer.findAll().then((result)=>{
            
            const values = {'result':result,'timeDifference': timeDifference(result)}
            res.status(200).send(values)
            //implementation
        }).catch((error)=>{
            res.send(error)
            //implementation
        }) 
    }  

    exports.show = async (req, res,next) => {
        await Timer.findAll({where: {id: req.params.id}}).then((result)=>{
            res.status(200).send(result)
            //implementation
        }).catch((error)=>{
            res.send(error)
            //implementation
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
               return res.status(200).send(result)

                //implementation
            }).catch((error)=>{
                console.log(error);
                //res.json(error)
            })
    };
    
    exports.destroy = async (req, res,next) => {

        await Timer.destroy({where: {id:req.body.id}}).then((result)=>{
            return res.status(200).send(result)
        }).catch ((error) =>{
            res.send(error)
            //implementation
        })
    };  

    
    
    