const Joi = require('joi');

//const name = Joi.string().regex(/^[A-Z]+ [A-Z]+$/i).uppercase().required()
const name =  Joi.string().alphanum().min(3).max(30).required()
const data  = Joi.date().default(() => moment().format())
 

const usersSchema = Joi.object({
    name : name,
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(7).required().strict(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required().strict()
});
const loginSchema = Joi.object({
    
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(7).required().strict(),
    
});
const projectSchema = Joi.object({
    name : name
});
const timerSchema = Joi.object({
    name : name,
    initialDate : data,
    finalDate : data,
    idProject : Joi.number().required()
});
module.exports = {
    '/authentication' : loginSchema,
    '/add-user' : usersSchema,
    '/add-project' : projectSchema,
    '/add-timer' : timerSchema
}