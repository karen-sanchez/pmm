$(document).ready(function(){
	//breakfast choice
	$('.breakfast-btn').on('click',function(){
		$.ajax({
			url: '/yelp-results',
			contentType: 'application/json',
			success: function(response){
				var breakfastDiv= $('#breakfast');
				var info = response.resultInfo;
				breakfastDiv.html('\
					<h1 class="meal-title">Breakfast</h1>\
					<a href="' + info.url +'"</a>\
					<h3>' + info.name + '</h3></a>\
					<img class="choice-border" src="'+info.img + '">\
					<h4>Rating:' + info.rating + 'Stars </h4>\
					<p>' + info.snippet + '</p>\
				');
			}
		});
	});
	// //lunch choice
	$('.lunch-btn').on('click',function(){
		$.ajax({
			url: '/yelp-results',
			contentType: 'application/json',
			success: function(response){
				var lunchDiv= $('#lunch');
				var info = response.resultInfo;
				lunchDiv.html('\
					<h1 class="meal-title">Lunch</h1>\
					<a href="' + info.url +'"</a>\
					<h3>' + info.name + '</h3></a>\
					<img class="choice-border" src="'+info.img + '">\
					<h4>Rating:' + info.rating + 'Stars </h4>\
					<p>' + info.snippet + '</p>\
				');
			}
		});
	});
	//dinner choice
	$('.dinner-btn').on('click',function(){
		$.ajax({
			url: '/yelp-results',
			contentType: 'application/json',
			success: function(response){
				var dinnerDiv= $('#dinner');
				var info = response.resultInfo;
				dinnerDiv.html('\
					<h1 class="meal-title">Dinner</h1>\
					<a href="' + info.url +'"</a>\
					<h3>' + info.name + '</h3></a>\
					<img class="choice-border" src="'+info.img + '">\
					<h4>Rating:' + info.rating + 'Stars </h4>\
					<p>' + info.snippet + '</p>\
				');
			}
		});
	});
	//dessert choice
	$('.dessert-btn').on('click',function(){
		$.ajax({
			url: '/yelp-results',
			contentType: 'application/json',
			success: function(response){
				var dessertDiv= $('#dessert');
				var info = response.resultInfo;
				dessertDiv.html('\
					<h1 class="dessert">Dessert</h1>\
					<a href="' + info.url +'"</a>\
					<h3>' + info.name + '</h3></a>\
					<img class="choice-border" src="'+info.img + '">\
					<h4>Rating:' + info.rating + 'Stars </h4>\
					<p>' + info.snippet + '</p>\
				');
			}
		});
	});
});