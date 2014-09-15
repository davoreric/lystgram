/********************************************************************/
/* LOGIN JS *********************************************************/
/* project: lystgram.com ********************************************/
/* author: Davor Eric ***********************************************/
/********************************************************************/

window.fbAsyncInit = function() {

	FB.init({
		appId      : '1475827829333910',
		cookie     : true,
		xfbml      : true,
		version    : 'v2.1'
	});

	FB.getLoginStatus(function(response) {
		app.login(response);
	});

};

(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

/* Facebook login handler */
app.login = function(response){

	this.init = function(){

		if (response.status === 'connected') {

			app.currentUser = {
				state: true,
				id: response.authResponse.userID
			};

		}

		app.startAngular();

	};


	this.init();

};