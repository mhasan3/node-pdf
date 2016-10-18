var express = require('express'),
    fs = require('fs'),
    app = express();

app.get('/', function (req, res) {
    var filePath = "/files/CopyofCV.pdf";

    fs.readFile(__dirname + filePath , function (err,data){
        res.contentType("application/pdf");
        res.send(data);
        if(err){
          console.log(err);
        }
    });
});

app.listen(3000, function(){
    console.log('Listening on 3000');
});