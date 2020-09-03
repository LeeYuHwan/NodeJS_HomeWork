var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.listen(3000, function(){
    console.log("start express server on port 3000");
});

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res){
    res.sendFile(__dirname + "/public/search.html");
});

app.post('/ajax_send_email', function(req, res){
    console.log(req.body.search);
    var responseData = {'result' : 'ok', 'search' : req.body.search};
    res.json(responseData);
});



