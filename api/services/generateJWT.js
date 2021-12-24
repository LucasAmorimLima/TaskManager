const {SECRET} = require('../../configs/constants/auth')
const jwt = require('jsonwebtoken')

function generateJWT(params = {}) {
    return token = jwt.sign({params},SECRET,{expiresIn : 500})
    
}
module.exports = {
    generateJWT
}