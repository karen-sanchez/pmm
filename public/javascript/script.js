$(document).ready(function(){

	$.getJSON('https://freegeoip.net/json/') 
    .done (function(location){

		$('#latitude').html(location.latitude);
		var geoLat = location.latitude;
		// console.log(geoLat);
		$('#longitude').html(location.longitude);
		var geoLong = location.longitude;
		// console.log(geoLong));
		if (geoLat != geoLong ){
			$.ajax({
		      	url: '/test',
		      	method: 'POST',
		      	contentType: 'application/json',
		      	data: JSON.stringify({ latitude: geoLat, longitude: geoLong }),
		      	success: function(response){
		      		console.log(response);
		    	}
	        });
		}        
	});
});




	