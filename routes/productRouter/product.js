const express = require('express');
const router = express.Router();

const productController = require('../../controllers/productController/productController.js');

router.get('/', productController.homeProduct );

router.get('/detail/:idProduct', productController.detail);

module.exports = router;