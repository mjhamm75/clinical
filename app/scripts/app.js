'use strict';

angular.module('clinicalApp', ['ngRoute', 'ui.bootstrap', 'ngResource']).config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'EncounterCtrl'
      })
      .when('/detail/:id',{
        templateUrl:'views/patient.detail.html'
      })
      .when('/new-auth', {
        templateUrl:'views/new.auth.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
