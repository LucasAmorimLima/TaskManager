const projectController = require('../api/controllers/projectController')
const express = require('express')
const router = express.Router()
const SchemaValidator = require('../api/services/SchemaValidator');
const validateRequest = SchemaValidator(true);

router.post('/add-project',validateRequest,projectController.insert)
router.get('/',projectController.index)
router.get('/:id',projectController.show)
router.delete('/',projectController.destroy)

module.exports = router 