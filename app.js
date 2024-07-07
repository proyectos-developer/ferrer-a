const cors = require('cors')

const express = require ('express');
const morgan = require('morgan');
const {create} = require('express-handlebars');
const path = require('path');
const flash = require ('connect-flash')

const app = express()
app.use(cors())

app.set ('port', process.env.PORT || 3001);

app.use(flash())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(express.static(path.resolve(__dirname, './backend/views')));
app.get ('/api', (req, res) => {
  res.sendFile(path.resolve(__dirname, './backend/views', 'profile'));
})

app.use(express.static(path.resolve(__dirname, './client/build')));
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/sobre-nosotros')));
app.get('/sobre-nosotros', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/sobre-nosotros', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/nuestra-tienda')));
app.get('/nuestra-tienda', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/nuestra-tienda', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/producto')));
app.get('/producto/:producto/:sku', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/producto', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/contactanos')));
app.get('/contactanos', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/contactanos', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/carrito-compras')));
app.get('/carrito-compras', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/carrito-compras', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/sesion')));
app.get('/sesion', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/sesion', 'index'));
});

app.use(express.static(path.resolve(__dirname, './client/build/olvide-password')));
app.get('/olvide-password', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/olvide-password', 'index'));
});

//Iniciar el servidor
app.listen (app.get('port'), () => {
    console.log ('Server en puerto ', app.get ('port'))
})
