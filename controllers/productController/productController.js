const fs = require('fs');

const productController = {
    homeProduct: function(req, res){
        let products = fs.readFileSync("./public/data/products.json", {encoding: 'utf-8'});
        products = JSON.parse(products);
        
        res.render('products.ejs', {products});
    },
    detail: function(req, res){
        let id = Number(req.params.idProduct);
        let products = fs.readFileSync('./public/data/products.json', {encoding: 'utf-8'});
        products = JSON.parse(products);
        let product = products.find(product => product.idProduct === id);
        if (product) {
            res.render('detalleProducto.ejs', {product});
        } else {
            res.status(404).send('Página no encontrada');
        }
    }

}

module.exports = productController;