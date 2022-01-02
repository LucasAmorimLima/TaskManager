const usersController = require('../api/controllers/usersController')
const express = require('express')
const router = express.Router()
const SchemaValidator = require('../api/services/SchemaValidator');
const validateRequest = SchemaValidator(true);
const {verifyJWT} = require('./midlewares')

router.post('/add-user',validateRequest,usersController.insert)
router.get('/',verifyJWT,usersController.index)
router.get('/:id',verifyJWT,usersController.show)
router.delete('/',verifyJWT,usersController.destroy)

module.exports = router 