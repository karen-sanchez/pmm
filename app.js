var express = require ('express');
var app = express();
var config = require('./config')

app.get('/', function(req,res){
	res.send("Hello World!");
});

app.listen(3000, function(){
	console.log("All Right! That's Cool!");
});
