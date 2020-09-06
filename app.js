const express = require('express');
const app = express();

const rutaHome = require('./routes/rutaHome.js');
const contacto = require('./routes/contacto.js');
const ingreso = require('./routes/ingreso.js');
const registro = require('./routes/registro.js');

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.use('/', rutaHome);
app.use('/contacto', contacto);
app.use('/ingreso', ingreso);
app.use('/registro', registro);


/*app.get('*', function(req, res){
    res.status(404).sendFile(__dirname + '/views/404.html');
});*/

app.listen(3000, () => {console.log('Servidor corriendo');})