'use strict';

angular.module('clinicalApp').directive('clinicalHeader', function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'views/header.html',

    link: function(scope) {

      scope.showAddPatientModal = function() {
        $('#patient-modal').modal('show');
      };

      scope.showFilterModal = function() {
        $('#filter-modal').modal('show');
      };

    }
  };
});