$(document).ready(function(){
	//loads first choices
	breakfastAjax();
	lunchAjax();
	dinnerAjax();
	dessertAjax();

	//ajax calls
	function breakfastAjax(){
		$.ajax({
			url: '/yelp-results-breakfast',
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
	};
	function lunchAjax(){
		$.ajax({
			url: '/yelp-results-lunch-dinner',
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
	}
	function dinnerAjax(){
		$.ajax({
			url: '/yelp-results-lunch-dinner',
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
	}
	function dessertAjax(){
		$.ajax({
			url: '/yelp-results-desserts',
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
	}
	//breakfast choice
	$('.breakfast-btn').on('click',breakfastAjax);
	// //lunch choice
	$('.lunch-btn').on('click',lunchAjax);
	//dinner choice
	$('.dinner-btn').on('click', dinnerAjax);
	//dessert choice
	$('.dessert-btn').on('click', dessertAjax);
});
