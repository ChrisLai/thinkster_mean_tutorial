var flapperNews = angular.module('flapperNews', ['ui.router']);


flapperNews.factory('posts', [function(){
  // service body
  var o = {
  	posts: []
  };
  return o;
}]);


flapperNews.controller('MainCtrl', [
	function($scope){
	  	$scope.test = 'Hello world!';

	  	$scope.posts = [
		  {title: 'post 1', upvotes: 5},
		  {title: 'post 2', upvotes: 2},
		  {title: 'post 3', upvotes: 15},
		  {title: 'post 4', upvotes: 9},
		  {title: 'post 5', upvotes: 4}
		];

		$scope.addPost = function(){
			
			if(!$scope.title || $scope.title === '') { return; }


			$scope.title = '';
			$scope.link = '';
		};

		$scope.incrementUpvotes = function(post) {
			post.upvotes += 1;
		};

	}

]);


