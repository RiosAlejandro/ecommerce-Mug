const fs = require('fs');
const { check, validationResult, body } = require('express-validator');

const createProducts = {
    createProduct: function(req, res){
        res.render('createProducts.ejs');
    },
    addProduct: function(req, res){
        let errors = validationResult(req);
        
        if(errors.isEmpty()){
            
            let productNew = {
                idProduct: req.body.idProduct,
                nameProducto: req.body.nameProducto,
                descriptionProduct: req.body.descriptionProduct,
                categoryProduct: req.body.categoryProduct,
                colorProduct: req.body.colorProduct,
                precioProduct: req.body.precioProduct
            };

            let baseProducts = fs.readFileSync("./public/data/products.json", {encoding: 'utf-8'});
            let product;
            if (baseProducts == "") {
                product = [];
            }else {
                product = JSON.parse(baseProducts);
            }

            product.push(productNew);
            let productJson = JSON.stringify(product);
            fs.writeFileSync('./public/data/products.json', productJson);

            res.redirect('/');
        } else{
            res.render("createProducts", { errors: errors.errors});
        }
        }
        
}

module.exports = createProducts;