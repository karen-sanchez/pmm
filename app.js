var express = require('express');
var app = express();
// Request API access: http://www.yelp.com/developers/getting_started/api_access
var Yelp = require('yelp');
var config = require('./config');
var secureYelp = new Yelp(config);

//set ejs to default engine
app.set('view engine', 'ejs');

//add public dir
app.use(express.static(__dirname + "/public"));
/*these are categories we can add to our search
	
	category_filter: "breakfast_brunch"
	category_fitler: "desserts"
*/
var randomizeResults = Math.floor(Math.random() * 999);
//landing page 
app.get('/', function (req, res) {
	secureYelp.search({ 
		term: 'food', 
		location: 'New+York', 
		category_filter: 'breakfast_brunch', 
		offset: randomizeResults})
	.then(function (data) {
		var businesses = data.businesses;
		var random = Math.floor((Math.random() * businesses.length));
		var result = businesses[random];
		res.render('main', {
			name: result.name,
			img: result.image_url,
			rating: result.rating,
			url: result.url,
			snippet: result.snippet_text
		});
	})
	.catch(function (err) {
	  console.error(err);
	});
});

app.get('/yelp-results', function(req,res){
	secureYelp.search({ 
		term: 'food', 
		location: 'New+York', 
		category_filter: 'breakfast_brunch', 
		offset: randomizeResults
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

app.listen(3000, function () {
  console.log('All Right! Thats Cool!');
});
