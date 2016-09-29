var express = require('express');
var app = express();

// Request API access: http://www.yelp.com/developers/getting_started/api_access
var Yelp = require('yelp');
var config = require('./config');
// console.log(config);

var secureYelp = new Yelp(config);

// See http://www.yelp.com/developers/documentation/v2/search_api
secureYelp.search({ term: 'food', location: 'New+York', limit: 15 })
.then(function (data) {
 // console.log(data);

businesses = data.businesses
 // console.log(businesses)

var array = businesses
var random = Math.floor((Math.random() * array.length) + 1);
// console.log(array[random])

var result = array[random]
console.log(result)


})
.catch(function (err) {
  console.error(err);
});

app.get('/', function (req, res) {
  res.send('Hello u!');
});

app.listen(3000, function () {
  // console.log('All Right! Thats Cool');
});
