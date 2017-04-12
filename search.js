"use strict"

var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended : true}));

router.post('/',(req,res,next) => {
    searchDataBase(req,res);
});

function searchDataBase(req,res) {
    const pg = require('pg');
    const conString = 'postgres://postgres:hello@localhost/test';
    const user = req.body;

     pg.connect(conString, (err,client,done) => {
        if(err){
            res.send('Connection Failed')
            return console.log("Error" + err);
        }
         var results = [];
    client.query('SELECT * FROM example WHERE name= $1;',[user.Name],
        (err,results) => {
             done();
             if(err){
                 return console.log(err);
            }
            //'results.rows' contains the data of the rows selected from the query
            res.send(results.rows);
        });
    });
}

module.exports = router;