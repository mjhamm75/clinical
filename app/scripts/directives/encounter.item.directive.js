'use strict';

angular.module('clinicalApp').directive('encounterItem', function () {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'views/encounter.item.html',
    scope: {
      encounter : '='
    },

    link: function(scope) {

    }
  };
});