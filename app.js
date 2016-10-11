var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var Yelp = require('yelp');
var config = require('./config');
var secureYelp = new Yelp(config);
var randomizeResults = Math.floor(Math.random() * 999);

app.use(bodyParser.json());

//set ejs to default engine
app.set('view engine', 'ejs');

//initiate router
//add public dir
app.use(express.static(__dirname + "/public"));
/*these are categories we can add to our search
	
	category_filter: "breakfast_brunch"
	category_fitler: "desserts"
*/

app.get('/', function (req, res) {
  res.render('main');
});

//breakfast ajax
app.post('/yelp-results-breakfast', function(req,res){
	// console.log(req.body.latlng)
	secureYelp.search({ 
		term: 'food', 
		ll: req.body.latlng, 
		category_filter: 'breakfast_brunch'
		// offset: randomizeResults
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
app.post('/yelp-results-lunch-dinner', function(req,res){
	secureYelp.search({ 
		term: 'food', 
		ll: req.body.latlng
		// offset: randomizeResults
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
		category_filter: 'desserts' 
		// offset: randomizeResults
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