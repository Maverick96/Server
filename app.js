var express = require('express');
//Instaniating a express object
var app = express();         
//loading router file to define routes for post method
var receive = require('./receive');     

app.use('/',(req,res,next) => {
    console.log('Time is ' + Date.now());
    //When the middleware doesn't send back the response object, it must pass control using 'next()' 
    next();
});
//To handle GET request
app.get('/',(req,res,next) => {
    //Sending a html file as response
   res.sendFile(__dirname + '/home.html');
});

//Handles requests routed to '/receive'
app.use('/receive',receive);        

app.listen('8080',() => {
    console.log("Listening on Port 8080");
});