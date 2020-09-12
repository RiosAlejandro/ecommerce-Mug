const express = require('express');
const router = express.Router();

const { check, validationResult, body } = require('express-validator');

const registroController = require('../controllers/registroController');

router.get('/', registroController.ingreso);
router.post('/', [
    check('email').isEmail().withMessage('Email no valido'),
    check('contrasena').isLength({min: 4}).withMessage('Contraseña incorrecta')
] ,registroController.ingresar);

module.exports = router;