const express = require('express');
const router = express.Router();
const path = require('path');

const { check, validationResult, body } = require('express-validator');

const registroController = require('../controllers/registroController.js');
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/img/avatar')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
   
var upload = multer({ storage: storage })

router.get('/', registroController.registro);
router.post('/', upload.any(), [
    check('nombre').isLength({min: 4}),
    check('apellido').isLength(),
    check('email').isEmail(),
    check('usuario').isLength({min: 6}),
    check('clave').isLength({min: 6}),
    check('telefono').isInt({min: 9})
] , registroController.crear);

module.exports = router;