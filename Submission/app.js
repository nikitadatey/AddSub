const express = require('express');
var bodyParser = require('body-parser');

const validate = require('./service/validate')
const addService = require('./service/add');
const subService = require('./service/sub');

const app = express();
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('hello world');
});

app.post('/add', validate, function(req, res){
    return addService(req,res);
});

app.post('/sub', validate, function(req, res){
    return subService(req,res);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});