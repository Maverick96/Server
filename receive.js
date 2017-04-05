var express = require('express');
var router = express.Router();
 //To access the Http Request Body
var bodyParser = require('body-parser');

//To add 'body' property to request object
router.use(bodyParser.urlencoded({extended : true}));

router.post('/',(req,res,next) => {
    //Add the values received from the form to Database
    addToDataBase(req,res);         
});

function addToDataBase(req,res){
    //include Postgres module
    const pg = require('pg');
    /*Store Database Creditentials to be passed to connect(),
    where 'postgres' is the username, 'hello' is the password for username and 'test' is the name of DB */
    const conString = 'postgres://postgres:hello@localhost/test';
    //Storing the body content in 'user'
    const user = req.body;
    //Connect to database
    pg.connect(conString, (err,client,done) => {
        if(err){
            res.send('Connection Failed')
            return console.log("Error" + err);
        }
        //insert tuple to database
        client.query('INSERT INTO example(name,age) VALUES ($1,$2);',[user.Name,user.Age],
        (err,result) => {
         // this done callback signals the pg driver that the connection can be closed or returned to the connection pool
            done();
            if(err){
                return console.log("Query Error " ,err);
            }
            res.send("ADDED TO DATABASE");
        })
    })
}

module.exports = router;