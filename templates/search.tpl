<section class="pageBlock innerView">

	<header class="smallHead">
		<h1>Search</h1>
		<a ng-click="goBack('/playlist')" class="back">back</a>
	</header>

	<form class="search" ng-submit="submitForm()">

		<p>First enter song name to add music to your awsome playlist. All songs are brought to you by YouTube.</p>

		<input type="text" ng-model="term" placeholder="Please enter search term..."/>

		<button class="button" type="submit">search</button>

	</form>

	<ul class="list">
		
		<li ng-repeat="video in videos">
			<a ng-click="addToPlaylist(video)">
				<strong>{{video.snippet.title}}</strong>
				<img src="{{video.snippet.thumbnails.default.url}}" />
			</a>
		</li>

	</ul>

</section>