const projectController = require('../api/controllers/projectController')
const express = require('express')
const router = express.Router()
const SchemaValidator = require('../api/services/SchemaValidator');
const validateRequest = SchemaValidator(true);
const {verifyJWT} = require('./midlewares')

router.post('/add-project',verifyJWT,validateRequest,projectController.insert)
router.get('/',verifyJWT,projectController.index)
router.get('/:id',verifyJWT,projectController.show)
router.delete('/',verifyJWT,projectController.destroy)

module.exports = router 