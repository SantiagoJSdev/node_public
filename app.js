// importamos los módulos necesarios
const express = require('express');
const path = require('path');
const cors = require("cors");
const morgan = require("morgan");
const { Router } = require("express");
var serveIndex = require('serve-index');
//creamos una instancia de express
const app = express();
const router = Router();

// puerto donde queremos que escuche nuestro servidor
const port = 3008;
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// función middleware para servir archivos estáticos
// app.use('/.well-known', express.static('.well-known'), serveIndex('.well-known'));
app.use(express.static(path.join(__dirname, 'public')));
// app.use("/");
router.get("/.well-known/pki-validation/074DE5883C3982193DBE3E25DA6CA8DE.txt", (req, res) => {
    res.sendFile(path.join(__dirname, '.well-known/pki-validation/074DE5883C3982193DBE3E25DA6CA8DE.txt'))
});
app.use(router);
// levantamos nuestro servidor en el puerto seleccionado
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto: ${port}`);
});