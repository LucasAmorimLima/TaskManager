const timerController = require('../api/controllers/timerController')
const express = require('express')
const router = express.Router()
const SchemaValidator = require('../api/services/SchemaValidator');
const validateRequest = SchemaValidator(true);

router.post('/add-timer',validateRequest,timerController.insert)
router.get('/',timerController.index)
router.get('/:id',timerController.show)
router.delete('/',timerController.destroy)

module.exports = router 