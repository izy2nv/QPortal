const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

//Set port
const port = process.env.PORT || '3000';
app.listen(port, () => {
    console.log('listening to port '+ port);
})
//For interacting with MongoDB
const api = require('./server/routes/api');

//Set the body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Point server to Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

//Set API file location
app.use('/api', api);

//Forward all other requests to the Angular index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'))
});