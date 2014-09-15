/********************************************************************/
/* APP JS ***********************************************************/
/* project: lystgram.com ********************************************/
/* author: Davor Eric ***********************************************/
/********************************************************************/

//global angular app module
var lyst = angular.module('lyst', ['ngRoute', 'ngAnimate']);

app.router();
app.controller();

app.startAngular = function(){

	angular.bootstrap(document, ['lyst']);

};