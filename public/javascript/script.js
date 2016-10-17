$(document).ready(function(){

	//geolocation
	getLocation();
	function getLocation(){
		if (navigator.geolocation){
		    navigator.geolocation.getCurrentPosition(success);
		} else {
	    	console.log("Geolocation is not supported by this browser.");
		}
	};
	function success(position){
		var userLat = $('#domLat');
		var userLong = $('#domLong');

		userLat.html(position.coords.latitude);
		userLong.html(position.coords.longitude);

		var userLatNum = parseFloat(userLat.text());
		var userLongNum = parseFloat(userLong.text());
		var latlng = userLatNum + ',' + userLongNum;
		console.log(latlng);

		//loads first choices
		breakfastAjax();
		lunchAjax();
		dinnerAjax();
		dessertAjax();
	
		// ajax calls
		function breakfastAjax(){
			$.ajax({
				url: '/yelp-results-breakfast',
				method: 'POST',
				contentType: 'application/json',
				data: JSON.stringify({latlng: latlng}),
				success: function(response){
					var breakfastDiv= $('#breakfast');
					var info = response.resultInfo;
					breakfastDiv.html('\
						<h1 class="meal-title">Breakfast</h1>\
						<a href="' + info.url +'"</a>\
						<h2>' + info.name + '</h2></a>\
						<img class="choice-border yelp-img" src="'+info.img + '">\
						<img src="' + info.rating + '"><h3>'+'Number of Reviews: '+ info.numOfReviews +'</h3>\
						<h3 class="text-center">'+ 'Distance: ' + info.distance + ' miles away' + '</h3>\
					');
				}
			});
		};
		function lunchAjax(){
			$.ajax({
				url: '/yelp-results-lunch',
				method: 'POST',
				contentType: 'application/json',
				data: JSON.stringify({latlng: latlng}),
				success: function(res){
					var lunchDiv= $('#lunch');
					var info = res.resultInfo;
					lunchDiv.html('\
						<h1 class="meal-title">Lunch</h1>\
						<a href="' + info.url +'"</a>\
						<h3>' + info.name + '</h3></a>\
						<img class="choice-border yelp-img" src="'+info.img + '">\
						<h4>Rating:' + info.rating + 'Stars </h4>\
						<p class="snippet text-center snippet">' + info.snippet + '</p>\
					');
				}
			});
		}
		function dinnerAjax(){
			$.ajax({
				url: '/yelp-results-dinner',
				method: 'POST',
				contentType: 'application/json',
				data: JSON.stringify({latlng: latlng}),
				success: function(response){
					var dinnerDiv= $('#dinner');
					var info = response.resultInfo;
					dinnerDiv.html('\
						<h1 class="meal-title">Dinner</h1>\
						<a href="' + info.url +'"</a>\
						<h3>' + info.name + '</h3></a>\
						<img class="choice-border yelp-img" src="'+info.img + '">\
						<h4>Rating:' + info.rating + 'Stars </h4>\
						<p class="text-center snippet">' + info.snippet + '</p>\
					');
				}
			});
		}
		function dessertAjax(){
			$.ajax({
				url: '/yelp-results-desserts',
				method: 'POST',
				contentType: 'application/json',
				data: JSON.stringify({latlng: latlng}),
				success: function(res){
					var dessertDiv= $('#dessert');
					var info = res.resultInfo;
					dessertDiv.html('\
						<h1 class="dessert">Dessert</h1>\
						<a href="' + info.url +'"</a>\
						<h3>' + info.name + '</h3></a>\
						<img class="choice-border yelp-img" src="'+info.img + '">\
						<h4>Rating:' + info.rating + 'Stars </h4>\
						<p class="text-center snippet">' + info.snippet + '</p>\
					');
				}
			});
		}
		// //breakfast choice
		$('.breakfast-btn').on('click',breakfastAjax);
		// // //lunch choice
		$('.lunch-btn').on('click',lunchAjax);
		// //dinner choice
		$('.dinner-btn').on('click', dinnerAjax);
		// //dessert choice
		$('.dessert-btn').on('click', dessertAjax);
	};

});	
