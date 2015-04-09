//Pull in GPS coordinates and write lat/long pair to form

//Listen on GPS checkbox element
function recordCoords() {
	if($( "#gpsTag" ).is( ":checked" ))
	    {
	    	//call corova gps here
	    }
	    else
	    {
	    	
	    }
}




var onSuccess = function(position) {
	//write success function here
	
};

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}
