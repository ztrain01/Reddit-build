var app = angular.module('reddit');

app.controller('PostController', function($scope, mainService) {
  $scope.test = 'Welcome to Reddit!';
  $scope.posts = [];
  
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
  
  $scope.vote = function(index, direction) {
    $scope.newPost = {};
  }
  
  $scope.vote = function(index, direction) {
    if(direction === 'up') {
        $scope.posts[index].karma++;
       } else if(direction === 'down') {
        $scope.posts[index].karma--;
    }
  }
  
  $scope.submitComment = function(index, comment) {
    $scope.posts[index].comments.push(comment);
    $scope.posts[index].commentForm = '';
  }
  
  var getData = function() {
    $scope.posts = mainService.getData();
  }
  
  getData();
  
});
