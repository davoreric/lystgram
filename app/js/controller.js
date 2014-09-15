/********************************************************************/
/* APP JS for angular controllers ***********************************/
/* project: lystgram.com ********************************************/
/* author: Davor Eric ***********************************************/
/********************************************************************/

app.controller = function(){

	lyst.controller('newController', function($scope) {

		//$location.path('/search');

	});

	lyst.controller('searchController', function($scope) {

		$scope.submitForm = function() {

			$.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q='+$scope.term+'&key='+app.youTubeApiKey,function(data){

				$scope.videos = data.items;
				$scope.$apply();

			});

		};

		$scope.addToPlaylist = function(){

			console.log('video added to playlist!');

		};

	});

	lyst.controller('loginController', ['$scope', '$location', function($scope, $location) {

		$scope.button = 'facebook login';
		$scope.message = 'Create and listen music playlists and share them with your friends. By logging in you accept ours terms of service.';
		
		$scope.login = function(){

			app.preloader.show();

			FB.login(function(response) {

				app.preloader.hide();

				if (response.authResponse) {

					app.currentUser = {
						state: true,
						id: response.authResponse.userID
					};

					$location.path('/');

				} else {

					$scope.button = 'Oh, well. Try again';

				}

				$scope.$apply();

			}, { scope: 'user_friends' });

		};

	}]);

	lyst.controller('optionController', function($scope) {
		
		$scope.logout = function(){

			FB.logout(function() {

				window.reload();

			});
			
		};

	});

};