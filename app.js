var express = require('express');
var expressObj = express();         //Instaniating a express object

//To deal with Get request
expressObj['get']('/', function(req,res){
   res.sendFile(__dirname + '/home.html');      //Sending a html file as response
});

expressObj.listen('8080',() => {
    console.log("Listening on Port 8080");
});