/********************************************************************/
/* GLOBALS JS *******************************************************/
/* project: lystgram.com ********************************************/
/* author: Davor Eric ***********************************************/
/********************************************************************/

/* Application namespace */
var app = {};

/* Current user */
app.currentUser = {
	state: false,
	id: null
};

/* YouTube API key */
app.youTubeApiKey = 'AIzaSyC-is0gZ_3hOmJtgD2d43KfDDdgg3ItMhU';

/* Object for inserting/removing preloader */
app.$preloader = $('<div class="preloader"><div class="inner"><div class="wr"><div class="b b1">&nbsp;</div></div><div class="wr"><div class="b b2">&nbsp;</div></div><div class="wr"><div class="b b3">&nbsp;</div></div><div class="wr"><div class="b b4">&nbsp;</div></div></div></div>');

app.preloader = {
	
	show: function(){

		$('body').append(app.$preloader);
		setTimeout(function(){ $('body').addClass('loading'); },1);

	},

	hide: function(){

		$('body').removeClass('loading');
		setTimeout(function(){ app.$preloader.remove(); },1000);
		
	}

}