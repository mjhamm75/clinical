'use strict';

angular.module('clinicalApp').directive('clinicalHeader', function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'views/header.html'
  };
});