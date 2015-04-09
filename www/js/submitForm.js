$( "form" ).submit(function( event ) {


	var data = $('form').serializeArray();		//Serialize form data into JSON

	var requestBody = {};						//Instantiate array to store massaged data

    $.each(data, function() {
        if (requestBody[this.name] !== undefined) {
            if (!requestBody[this.name].push) {
                requestBody[this.name] = [requestBody[this.name]];
            }
            requestBody[this.name].push(this.value || '');
        } else {
            requestBody[this.name] = this.value || '';
        }
    });




});
