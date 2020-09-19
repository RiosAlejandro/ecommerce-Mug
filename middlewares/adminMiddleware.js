function adminMiddleware (req, res, next) {
    if(req.session.usuarioLogueado != undefined && req.session.usuarioLogueado.email == "alexandro.aa86@gmail.com"){
        next();
    }else {
        res.send('Esta página es para invitados');
    }
}

module.exports = adminMiddleware;