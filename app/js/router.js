/********************************************************************/
/* APP JS for angular router ****************************************/
/* project: lystgram.com ********************************************/
/* author: Davor Eric ***********************************************/
/********************************************************************/

app.router = function(){

	lyst.config(function($routeProvider,$locationProvider) {

		var requireAuthentication = function () {
			
			return {

				load: function ($q, $location) {
					
					var deferred = $q.defer();
					deferred.resolve();

					if (app.currentUser.state) {

						return deferred.promise;

					} else {

						$location.path('/login');

					}
				}

			};

		};

		$routeProvider

			.when('/', {
				templateUrl : 'templates/home.tpl',
				controller  : 'homeController',
				resolve: requireAuthentication()
			})

			.when('/login', {
				templateUrl : 'templates/login.tpl',
				controller  : 'loginController'
			})

			.when('/new', {
				templateUrl : 'templates/new.tpl',
				controller  : 'newController',
				resolve: requireAuthentication()
			})

			.when('/search', {
				templateUrl : 'templates/search.tpl',
				controller  : 'searchController',
				resolve: requireAuthentication()
			})

			.when('/options', {
				templateUrl : 'templates/options.tpl',
				controller  : 'optionController',
				resolve: requireAuthentication()
			})

			.otherwise({
				redirectTo: '/'
			});

		$locationProvider.html5Mode(true);

	});

};