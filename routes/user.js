const usersController = require('../api/controllers/usersController')
const express = require('express')
const router = express.Router()
const SchemaValidator = require('../api/services/SchemaValidator');
const validateRequest = SchemaValidator(true);

router.post('/add_user',validateRequest,usersController.insert)
router.get('/',usersController.index)
router.get('/:id',usersController.show)
router.delete('/',usersController.destroy)

module.exports = router 