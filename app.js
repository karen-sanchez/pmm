var express = require('express');
var app = express();

// Request API access: http://www.yelp.com/developers/getting_started/api_access
var Yelp = require('yelp');
var config = require('./config');
console.log(config);

var secureYelp = new Yelp(config);

// See http://www.yelp.com/developers/documentation/v2/search_api
secureYelp.search({ term: 'food', location: 'New+York', limit: 1 })
.then(function (data) {
  console.log(data);
})
.catch(function (err) {
  console.error(err);
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('All Right! Thats Cool');
});
