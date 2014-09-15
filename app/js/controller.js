/********************************************************************/
/* APP JS for angular controllers ***********************************/
/* project: lystgram.com ********************************************/
/* author: Davor Eric ***********************************************/
/********************************************************************/

app.controller = function(){

	lyst.run(function($rootScope,$location) {
        
        $rootScope.goBack = function(url) {
            
            $rootScope.slideDir = 'backwards';
			app.slideDirectionForward = false;
			$location.path(url);

        };

    });

	lyst.controller('homeController', function($scope) {

		$scope.slideDir = app.checkSlideDirection();

	});

	lyst.controller('playlistController', function($scope) {

		$scope.slideDir = app.checkSlideDirection();

	});

	lyst.controller('searchController', function($scope) {

		$scope.slideDir = app.checkSlideDirection();

		$scope.submitForm = function() {

			$.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q='+$scope.term+'&key='+app.youTubeApiKey,function(data){

				if( data.pageInfo.totalResults == 0 ){

					alert('No results found!');

				} else {

					$scope.videos = data.items;
					$scope.$apply();

				}

			});

		};

		$scope.addToPlaylist = function(){

			alert('video added to playlist!');

		};

	});

	lyst.controller('loginController', function($scope, $location) {

		$scope.slideDir = app.checkSlideDirection();
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

	});

	lyst.controller('optionController', function($scope,$location) {

		$scope.slideDir = app.checkSlideDirection();
		
		$scope.logout = function(){

			FB.logout(function() {

				setTimeout(function(){
					window.location = '/';
				},1000);

			});
			
		};

	});

};