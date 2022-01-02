const jwt = require('jsonwebtoken')
const {SECRET} = require('../configs/constants/auth')
//middleware Jwt controller
function verifyJWT  (req,res,next){
    const token = req.headers['x-access-token']
    if (!token) 
        return res.status(401).send({ auth: false, message: 'Token não informado.' });
    jwt.verify(token, SECRET, (err,decode)=>{
        if(err) return res.status(401).json({auth: false, message:err})     
        req.userId = decode.userId
        next()
    })
}
module.exports ={
    verifyJWT
}