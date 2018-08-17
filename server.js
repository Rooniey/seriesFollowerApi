const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

//load secrets 
require('dotenv').load();

const { CONNECTION_STRING } = require('./configuration/mongoConfig')
mongoose.Promise = global.Promise;
mongoose.connect(CONNECTION_STRING, { useNewUrlParser: true });

const app = express();

app.use(cors());

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

//Routes

app.use('/users', require('./routes/users'));
app.use('/series', require('./routes/series'));
app.use('/movies', require('./routes/movies'));



const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


