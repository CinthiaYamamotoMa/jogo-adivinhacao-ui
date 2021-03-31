const express = require('express');

const app = express();
const path = require('path');
const router = require('./routes.js');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 9000;

app.engine('html', require('ejs').renderFile);

app.set('views', './view');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Servidor rodando em ${PORT}`)
});