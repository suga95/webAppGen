/**
 * Created by Suga on 6/18/2018.
 */
 var express = require('express');
 var app = express();

 var router = express.Router();


 app.use('/',express.static('00_template'));

 app.listen(3000, function (err) {
    if(err)
    {
        console.err(error);
    }
    console.log("server is running at port 3000");
 });