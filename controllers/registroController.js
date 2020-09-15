const fs = require('fs');
const { check, validationResult, body } = require('express-validator');
const bcrypt = require('bcrypt');

const registroController = {
    ingreso: function(req, res){
        res.render('ingreso.ejs');
    },
    ingresar: function(req, res){
        let errors = validationResult(req);
        
        if(errors.isEmpty()) {
            let archivoUsuario = fs.readFileSync("./public/data/usuarios.json", { encoding: 'utf-8' });
            let usuarios;
            
            if (archivoUsuario == "") {
                usuarios = [];
            }else {
                usuarios = JSON.parse(archivoUsuario);
            }
            let usuarioALoguearse;

            for(let i = 0; i < usuarios.length; i++) {
                if(usuarios[i].email == req.body.email){
                    if(/*bcrypt.compareSync(req.body.contrasena), usuarios[i].contrasena*/req.body.contrasena == usuarios[i].clave){
                        usuarioALoguearse = usuarios[i];
                        break;
                    }
                }
            }

            if(usuarioALoguearse == undefined){
                return res.render('ingreso.ejs', {errors: [
                    {msg: 'credenciales invalidas'}
                ]});
            }
            req.session.usuarioLogueado = usuarioALoguearse;

            res.redirect('/');
        }else{
            return res.render('ingreso.ejs', {errors: errors.errors});
        }
    },
    registro: function(req, res){
        res.render('registro.ejs');
    },
    crear: function(req, res, next){
        let errors = validationResult(req);
        
        if(errors.isEmpty()){

        let usuario = {
            nombre : req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            usuario: req.body.usuario,
            clave: req.body.clave,
            telefono: req.body.telefono,
            avatar: req.files[0].filename
        }
       
        let archivoUsuario = fs.readFileSync("./public/data/usuarios.json", { encoding: 'utf-8' });
        let usuarios;
        if (archivoUsuario == "") {
            usuarios = [];
        }else {
            usuarios = JSON.parse(archivoUsuario);
        }

        usuarios.push(usuario);
        let usuarioJson = JSON.stringify(usuarios);
        fs.writeFileSync("./public/data/usuarios.json", usuarioJson);

        res.redirect('/');
    } else{
        res.render("registro", { errors: errors.errors});
    }
    }
}

module.exports = registroController;