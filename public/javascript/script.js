$(document).ready(function(){

	$("#locButton").click(initiateGeolocation);

	function initiateGeolocation(){
		navigator.geolocation.getCurrentPosition(handleGeolocationQuery);
	};

    function handleGeolocationQuery(position){
        userLat = position.coords.latitude;
        userLong = position.coords.longitude; 


       $.ajax({
      	url: '/test',
      	method: 'POST',
      	contentType: 'application/json',
      	data: JSON.stringify({ latitude: userLat, longitude: userLong}),
      	success: function(response){
      		console.log(response);
      		console.log(userLat);
    		}
		}); 
	};
});





















