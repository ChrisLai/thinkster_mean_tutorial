angular.module('flapperNews', ['ui.router'])
.config([
	'$stateProvider',
	'$urlRouter',
	function($stateProvider, $urlRouter) {

	  $stateProvider
	    .state('home', {
	      url: '/home',
	      templateUrl: '/home.html',
	      controller: 'MainCtrl'
	    });

	  $urlRouter.otherwise('home');
}])
.factory('posts', [function(){
  // service body
  var o = {
  	posts: []
  };
  return o;
}])
.controller('MainCtrl', [
	'$scope',
	'$posts',
	function($scope){
	  	$scope.test = 'Hello world!';

	  	$scope.posts = posts.posts;

		$scope.addPost = function(){
			
			if(!$scope.title || $scope.title === '') { return; }
			$scope.posts.push({
				title: $scope.title, 
				link: $scope.link,
				upvotes: 0,
				 comments: [
				   {author: 'Joe', body: 'Cool post!', upvotes: 0},
				   {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
				 ]
	   		});

			$scope.title = '';
			$scope.link = '';
		};

		$scope.incrementUpvotes = function(post) {
			post.upvotes += 1;
		};

		$scope.addComment = function(){
		  if($scope.body === '') { return; }
		  $scope.post.comments.push({
		    body: $scope.body,
		    author: 'user',
		    upvotes: 0
		  });
		  $scope.body = '';
		};

	}

]);

