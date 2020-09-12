const express = require('express');
const router = express.Router();

const { check, validationResult, body } = require('express-validator');

const registroController = require('../controllers/registroController.js');

router.get('/', registroController.registro);
router.post('/', [
    check('nombre').isLength({min: 4}),
    check('apellido').isLength(),
    check('email').isEmail(),
    check('usuario').isLength({min: 6}),
    check('clave').isLength({min: 6}),
    check('telefono').isInt({min: 9})
] , registroController.crear);

module.exports = router;