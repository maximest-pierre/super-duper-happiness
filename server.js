const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

let dbuser = '';
let dbpassword = '';

let dev_db_url = 'mongodb://'+dbuser+':'+dbpassword+'@ds245901.mlab.com:45901/mongodbtestnodejs';

let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const product = require('./routes/product.route');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/products', product);

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port)
});