$(document).ready((function() {
	
	$('#login_form').bind("keyup keypress", function(e) {
	  	var code = e.keyCode || e.which; 
	  	if (code  == 13) {               
	    	e.preventDefault();
	    	return false;
	  	}
	});
	
	$('#logo').hide().fadeIn(1000);
	$('#usernameField').hide().fadeIn(1000);
	$('#passwordField').hide().fadeIn(1000);
	$('#loginButton').hide();
	
	$('#usernameField').bind('input propertychange', function() {
		if(!$('#usernameField').val() || !$('#passwordField').val()) {
			$('#loginButton').fadeOut(200);
		}
		else {
			$('#loginButton').fadeIn(200);
		}
	});
	$('#passwordField').bind('input propertychange', function() {
		if(!$('#usernameField').val() || !$('#passwordField').val()) {
			$('#loginButton').fadeOut(200);
		}
		else {
			$('#loginButton').fadeIn(200);
		}
	});
}));

