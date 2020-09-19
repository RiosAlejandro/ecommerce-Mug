const express = require('express');
const app = express();

const rutaHome = require('./routes/rutaHome.js');
const contacto = require('./routes/contacto.js');
const ingreso = require('./routes/ingreso.js');
const registro = require('./routes/registro.js');
const admin = require('./routes/adminRouter/admin.js')
const product = require('./routes/productRouter/product.js');
const recordameMiddleware = require('./middlewares/recordameMiddlewares.js');
const adminMiddleware = require('./middlewares/adminMiddleware.js');

const path = require('path');
const fs = require('fs');
const { check, validationResult, body } = require('express-validator');
const session = require('express-session');
const bcrypt = require('bcrypt');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname + "/public")));

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(session({ secret: 'Secreto!!' }));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(recordameMiddleware);

app.use('/', rutaHome);
app.use('/contacto', contacto);
app.use('/ingreso', ingreso);
app.use('/registro', registro);
/*app.use('/producto/:idDetalle, armar ruta a detalleProducto.ejs);*/
app.use('/admin', adminMiddleware, admin);
app.use('/product', product);


/*app.get('*', function(req, res){
    res.status(404).sendFile(__dirname + '/views/404.html');
});*/

app.listen(3000, () => {console.log('Servidor corriendo');})