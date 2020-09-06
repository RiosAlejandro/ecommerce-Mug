const express = require('express');
const router = express.Router();

const registroController = require('../controllers/registroController');

router.get('/', registroController.ingreso);

module.exports = router;