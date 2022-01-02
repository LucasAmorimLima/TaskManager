const timerController = require('../api/controllers/timerController')
const express = require('express')
const router = express.Router()
const SchemaValidator = require('../api/services/SchemaValidator');
const validateRequest = SchemaValidator(true);
const {verifyJWT} = require('./midlewares')

router.post('/add-timer',verifyJWT,validateRequest,timerController.insert)
router.get('/',verifyJWT,timerController.index)
router.get('/:id',verifyJWT,timerController.show)
router.delete('/',verifyJWT,timerController.destroy)

module.exports = router 