const registroController = {
    ingreso: function(req, res){
        res.render('ingreso.ejs');
    },
    registro: function(req, res){
        res.render('registro.ejs');
    }
}

module.exports = registroController