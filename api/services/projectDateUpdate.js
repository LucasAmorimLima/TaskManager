const Projects =  require('../models/ProjectsModel')
const moment = require('moment')

async function getStatus(idProject) {
    let status 
    await Projects.findAll({where: {id: idProject}})
    .then((result)=>{
        //console.log(result);
        status = moment.utc(result[0]['dataValues']['status']);
        console.log('1')
    })
    console.log('2');
    return status;
}

exports.updateStatusProject = async (idProject,result) =>{
    
    let status = await  getStatus(idProject)
    console.log(status);
    console.log(result);
    var seconds = moment.utc(result['dataValues']['finalDate']).diff(moment.utc(result['dataValues']['initialDate']),'second');
    status = moment(status).add(seconds, 'seconds');
    
    await Projects.update(
        { status: status },
        {where: {id: idProject}})
    .then((result)=>{
        console.log('okay');
    });
}
