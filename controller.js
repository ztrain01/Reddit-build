var app = angular.module('reddit');

app.controller('PostController', function($scope) {
  $scope.test = 'Welcome to Reddit!';
  $scope.posts = [];
  $scope.nums = [1,2,3,4,5,6];
  
  $scope.addPost = function() {
    
    $scope.newPost.timeStamp = Date.now();
    $scope.newPost.karma = 0;
    $scope.newPost.comments = [];
    console.log($scope.newPost);
    $scope.posts.push($scope.newPost)
    $scope.reset();
  }
  
  $scope.reset = function() {
    $scope.newPost = {};
  }
  
  
});
