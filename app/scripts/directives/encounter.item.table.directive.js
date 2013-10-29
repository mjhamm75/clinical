'use strict';

angular.module('clinicalApp').directive('encounterItemTable', function () {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'views/encounter.item.table.html',
    scope: {
      encounters : '='
    },

    link: function(scope) {
      scope.getSelectedRow = function(index) {
        scope.selectedIndex = index;
      };
    }
  };
});