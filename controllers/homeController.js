const homeController = {
    index: function(req, res){
        res.render('home.ejs');
    },
    contacto: function(req, res){
        res.render('contacto.ejs');
    }
}

module.exports = homeController;