const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

//load secrets 
require('dotenv').load();

const { CONNECTION_STRING } = require('./configuration/mongoConfig')
mongoose.Promise = global.Promise;
mongoose.connect(CONNECTION_STRING, { useNewUrlParser: true });

const app = express();

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

//Routes
app.use('/movies', require('./routes/movies'));
app.use('/users', require('./routes/users'));
app.use('/series', require('./routes/series'));


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


