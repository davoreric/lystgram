<section class="pageBlock innerView">

	<header class="smallHead">
		<h1>Playlist</h1>
		<a ng-click="goBack('/')" class="back">back</a>
		<a ng-show="hasContent" ng-click="clearStorage()" class="next">clear</a>
	</header>

	<section ng-hide="hasContent" class="notification">
		<p>Your playlist is currently empty.</p>
	</section>

	<div class="audioFrame" ng-show="hasContent">
		<iframe scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/101845244&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
	</div>

	<div class="btnArea">

		<a href="/search" class="button">{{buttonText}}</a>

	</div>

	<ul class="list">
		
		<li ng-repeat="video in videos">
			<a>
				<strong>{{video.name}}</strong>
				<img src="{{video.thumb}}" />
			</a>
		</li>

	</ul>

</section>