var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var Yelp = require('yelp');
var config = require('./config');
var secureYelp = new Yelp(config);

// var randomizeResults = Math.floor(Math.random() * 20);

//set ejs to default engine
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.get('/', function (req, res) {
  res.render('main');
});

//breakfast ajax
app.post('/yelp-results-breakfast', function(req,res){
	console.log(req.body.latlng)
	secureYelp.search({ 
		term: 'food', 
		ll: req.body.latlng, 
		radius_filter: 9656,    //6 miles
		sort: 1,
		category_filter: 'breakfast_brunch'
		// offset: randomizeResults
	})
	.then(function (data) {
		var businesses = data.businesses;
		var random = Math.floor((Math.random() * businesses.length));
		console.log(businesses.length + ' ' + 'len')
		var result = businesses[random];
		var resultInfo = 
			{
			name: result.name,
			img: result.image_url,
			rating: result.rating,
			address: result.location.display_address,
			url: result.url,
			snippet: result.snippet_text
		};
		res.send({resultInfo: resultInfo});
	})
	.catch(function (err) {
	  console.error(err);
	});
});
app.post('/yelp-results-lunch', function(req,res){
	secureYelp.search({ 
		term: 'food', 
		ll: req.body.latlng,
		radius_filter: 9656,
		sort: 1
	})
	.then(function (data) {
		var businesses = data.businesses;
		var random = Math.floor((Math.random() * businesses.length));
		var result = businesses[random];
		var resultInfo = 
			{
			name: result.name,
			img: result.image_url,
			rating: result.rating,
			url: result.url,
			snippet: result.snippet_text
		};
		res.send({resultInfo: resultInfo});
	})
	.catch(function (err) {
	  console.error(err);
	});
});
app.post('/yelp-results-dinner', function(req,res){
	secureYelp.search({ 
		term: 'food', 
		ll: req.body.latlng,
		radius_filter: 9656,
		sort: 1,
		offset: 20
	})
	.then(function (data) {
		var businesses = data.businesses;
		var random = Math.floor((Math.random() * businesses.length));
		var result = businesses[random];
		var resultInfo = 
			{
			name: result.name,
			img: result.image_url,
			rating: result.rating,
			url: result.url,
			snippet: result.snippet_text
		};
		res.send({resultInfo: resultInfo});
	})
	.catch(function (err) {
	  console.error(err);
	});
});
app.post('/yelp-results-desserts', function(req,res){
	secureYelp.search({ 
		term: 'food', 
		ll: req.body.latlng,
		radius_filter: 9656,
		sort: 1,
		category_filter: 'desserts' 
	})
	.then(function(data) {
		var businesses = data.businesses;
		var random = Math.floor((Math.random() * businesses.length));
		var result = businesses[random];
		var resultInfo = 
			{
			name: result.name,
			img: result.image_url,
			rating: result.rating,
			url: result.url,
			snippet: result.snippet_text
		};
		res.send({resultInfo: resultInfo});
	})
	.catch(function (err) {
	  console.error(err);
	});
});

app.listen(3000, function () {
  console.log('All Right! Thats Cool!');
});