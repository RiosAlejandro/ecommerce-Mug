function adminMiddleware (req, res, next) {
    
    if(req.session.usuarioLogueado != undefined && req.session.usuarioLogueado.usuario == "admin"){
        next();
    }else {
        res.send('Esta página es para invitados');
    }
}

module.exports = adminMiddleware;