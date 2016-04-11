var FoorumApp = angular.module('FoorumApp', ['ngRoute', 'firebase']);
FoorumApp.config(function($routeProvider){
  $routeProvider
    .when('/', {
      controller: 'MoviesListController',
      templateUrl: 'app/views/movies/index.html'
    })
    .when('/movies/:id', {
      controller: 'ShowMovieController',
      templateUrl: 'app/views/movies/show.html'
    })
    .when('/messages/:id', {
      controller: 'ShowMessageController',
      templateUrl: 'app/views/messages/show.html'
    })
    .when('/login', {
      controller: 'UsersController',
      templateUrl: 'app/views/users/login.html'
    })
    .when('/register', {
      controller: 'UsersController',
      templateUrl: 'app/views/users/register.html'
    })
    .otherwise({
      redirectTo: '/'
    });
    
});

FoorumApp.run(function($rootScope, $location, Api){
  $rootScope.logOut = function(){
    Api.logout().success(function(){
      $location.path('/login');
      $rootScope.userLoggedIn = null;
    });
  }
});

