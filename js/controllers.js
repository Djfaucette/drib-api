'use strict';

var controllers = angular.module('drib-api.controllers', []);

controllers.controller('appCtrl', function ($scope) {
  // ENTER THE USER YOU WANT HERE
  $scope.name = "suziejurado";
});

// USE THE CODE BELOW TO DISPLAY POPULAR 'SHOTS'
// controllers.controller('shotsListCtrl', function($scope, $http){
//   $scope.list;
//   $http.jsonp('https://api.dribbble.com/v1/shots?callback=JSON_CALLBACK&amp;access_token=your_access_token').then(function(data){
//       $scope.list = data.data;
//       console.log(data);
//   });
// });

//USE THIS CODE TO DISPLAY A PARTICULAR USERS' FEED
controllers.controller('shotsListCtrl', function($scope, $http){
  $scope.list;
  $http.jsonp('https://api.dribbble.com/v1/users/' + $scope.name + '/shots?callback=JSON_CALLBACK&amp;access_token=your_access_token').then(function(data){
      $scope.list = data.data;
      console.log(data);
  });
});




// access token  = 5368381b21999693ca1b60daeaf8fe7e9312c557e13aac6a608816ebfe92e069
