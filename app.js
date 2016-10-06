var express = require('express');
var app = express();
// Request API access: http://www.yelp.com/developers/getting_started/api_access
var Yelp = require('yelp');
var config = require('./config');
var secureYelp = new Yelp(config);
var bodyParser = require('body-parser'); 
/*these are categories we can add to our search
	category_filter: "breakfast_brunch"
	category_fitler: "desserts"
*/
var randomizeResults = Math.floor(Math.random() * 999);

//user lat and long
var latitude = [];
var longitude = [];

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
//landing page 

// var lat = 40.7402999;
// var long = -73.8258546;

// var yourLocation = lat + ',' + long;
// console.log(yourLocation);

app.get('/', function (req, res) {
	secureYelp.search({ 
		term: 'food', 
		location: 'New + York',
		// ll: yourLocation,
		category_filter: 'breakfast_brunch'
		// offset: randomizeResults
	})
	.then(function (data) {
		var businesses = data.businesses;
		var random = Math.floor((Math.random() * businesses.length));
		var result = businesses[random];
		res.render('main', {
			name: result.name,
			address: result.location.address,
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


app.post('/test', function(req, res){
	var userLat = req.body.latitude;
	console.log("userLat");
	var userLong = req.body.longitude;
	latitude.push(userLat);
	longitude.push(userLong);

	res.send(userLat);
});

console.log(latitude);
console.log(longitude);

app.listen(3000, function () {
  console.log('Running on port 3000!');
});