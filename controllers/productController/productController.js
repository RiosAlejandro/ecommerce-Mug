const fs = require('fs');

const productController = {
    homeProduct: function(req, res){
        let products = fs.readFileSync("./public/data/products.json", {encoding: 'utf-8'});
        products = JSON.parse(products);
        
        res.render('products.ejs', {products});
    },
    detail: function(req, res){
        
    }

}

module.exports = productController;