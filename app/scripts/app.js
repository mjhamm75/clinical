'use strict';

angular.module('clinicalApp', ['ngRoute', 'ui.bootstrap', 'ngResource']).config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'EncounterCtrl'
      })
      .when('/:id',{
        templateUrl:'views/patient.detail.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
