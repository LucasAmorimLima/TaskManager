const {authentication} = require('../api/controllers/loginController')
const express = require('express')
const router = express.Router()
const SchemaValidator = require('../api/services/SchemaValidator');
const validateRequest = SchemaValidator(true);

router.post('/sign-up',validateRequest,authentication)

module.exports = router 