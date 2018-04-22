var app = angular.module('createLog', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: './views/home.html'
    })
    .when('/PQ', {
      templateUrl: './views/PQ.html'
    })
    .when('/INOP', {
      templateUrl: './views/INOP.html'
    })
    .when('/APPROVAL', {
      templateUrl: './views/APPROVAL.html'
    })
    .when('/COL', {
      templateUrl: './views/COL.html'
    })
    .when('/LVM', {
      templateUrl: './views/LVM.html'
    })
    .otherwise({redirectTo:'/'});

$locationProvider.hashPrefix("");

});
