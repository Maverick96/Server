var express = require('express');
var expressObj = express();

expressObj.get('/', function(req,res,next){
   console.log('Hi');
   next();
   res.send("hello");
});

expressObj['get']('/', function(req,res){
   res.sendFile(__dirname + '/home.html');
});



expressObj.listen('8080',() => {
    console.log("Listening on Port 8080");
});