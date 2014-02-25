'use strict';

// Declare app level module which depends on filters, and services
var dinnerAppModule = angular.module('dinnerPlannerPro', ['ngRoute']);

/*angular.module('dinnerPlannerPro', [
  'ngRoute',
  'DinnerModel',
  'dinnerPlannerPro.MainController',
  'dinnerPlannerPro.DishController'
]);*/

dinnerAppModule.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/start-screen.html'});
  $routeProvider.when('/plan-a-dinner', {templateUrl: 'partials/plan-a-dinner.html', controller: 'dinnerPlannerPro.MainController'});
  $routeProvider.when('/overview', {templateUrl: 'partials/overview.html', controller: 'dinnerPlannerPro.MainController'});
  $routeProvider.when('/preparation', {templateUrl: 'partials/preparation.html', controller: 'dinnerPlannerPro.MainController'});
  $routeProvider.when('/dish-detail', {templateUrl: 'partials/dish-detail.html', controller: 'dinnerPlannerPro.DishController'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);

// add layout stuff here 
$(document).on("ready", function() {
  $("#controls li:first-child").addClass("active");

  $("#controls li").on("click", function () {
    $("#controls li").removeClass("active");
    $(this).addClass("active");
  });
});