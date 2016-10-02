var express = require('express');
var app = express();

// Request API access: http://www.yelp.com/developers/getting_started/api_access
var Yelp = require('yelp');
var config = require('./config');

var secureYelp = new Yelp(config);

/*these are categories we can add to our search
	restaurants ""
	breakfast => "breakfast_brunch"
	
*/
// var array = businesses
// var random = Math.floor((Math.random() * array.length) + 1);
// // console.log(array[random])

// var result = array[random]
// console.log(result)
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

app.use(express.static(__dirname + "/public"));
//landing page 
app.get('/', function (req, res) {
	secureYelp.search({ term: 'food', location: 'New+York', offset: randomizeResults})
	.then(function (data) {
		var businesses = data.businesses;
		var random = Math.floor((Math.random() * businesses.length) + 1);
		var result = businesses[random];
		console.log(result);
		res.render('main', {
			name: result.name,
			img: result.image_url,
			url: result.url
		});
	})
	.catch(function (err) {
	  console.error(err);
	});
});

app.listen(3000, function () {
  console.log('All Right! Thats Cool!');
});
