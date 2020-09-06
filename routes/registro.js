const express = require('express');
const router = express.Router();

const registroController = require('../controllers/registroController.js');

router.get('/', registroController.registro);

module.exports = router;