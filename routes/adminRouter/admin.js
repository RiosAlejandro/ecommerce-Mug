const express = require('express');
const router = express.Router();

const { check, validationResult, body } = require('express-validator');
const path = require('path');

const productControllerAdmin = require('../../controllers/adminController/productControllerAdmin.js');
const multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/img/imgProducts')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
   
var upload = multer({ storage: storage })

router.get('/product/create', productControllerAdmin.createProduct);       
router.post('/product/create', upload.any() , [
    check('idProduct').isInt().withMessage('Id del producto es obligatorio'),
    check('nameProducto').isLength({min: 3}).withMessage('Falta el nombre del producto'),
    check('descriptionProduct').isLength({min: 8}).withMessage('Falta la descripción del producto'),
    check('categoryProduct').isLength().withMessage('Falta la categoría del producto'),
    check('colorProduct').isLength({min: 3}).withMessage('Falta el color del producto'),
    check('precioProduct').isInt().withMessage('Falta el precio del producto')
] ,productControllerAdmin.addProduct); 

router.get('/product/:id/edit', productControllerAdmin.editController);
router.put('/product/:id', productControllerAdmin.putController);

module.exports = router;


