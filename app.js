var express = require('express');
var app = express();
// Request API access: http://www.yelp.com/developers/getting_started/api_access
var Yelp = require('yelp');
var config = require('./config');
var secureYelp = new Yelp(config);
/*these are categories we can add to our search
	
	category_filter: "breakfast_brunch"
	category_fitler: "desserts"
*/
var randomizeResults = Math.floor(Math.random() * 999);
// var search = secureYelp.search({ term: 'food', location: 'New+York', limit: 1, offset: randomizeResults})
// .then(function (data) {
// 	var name = data.businesses;
// 	console.log(name);
// 	console.log(randomizeResults);
// })
// .catch(function (err) {
//   console.error(err);
// });
app.set('view engine', 'ejs');

// function myFunction(){
// 	secureYelp.search({ 
// 		term: 'food', 
// 		location: 'New+York', 
// 		category_filter: 'dessert', 
// 		offset: randomizeResults})
// 	.then(function (data) {
// 		var businesses = data.businesses;
// 		var random = Math.floor((Math.random() * businesses.length));
// 		var result = businesses[random];
// 		res.render('main', {
// 			name: result.name,
// 			img: result.image_url,
// 			rating: result.rating,
// 			url: result.url,
// 			snippet: result.snippet_text
// 		});
// 	})
// }

app.use(express.static(__dirname + "/public"));
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

app.listen(3000, function () {
  console.log('All Right! Thats Cool!');
});
