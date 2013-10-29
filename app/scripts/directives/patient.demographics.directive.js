'use strict';

angular.module('clinicalApp').directive('patientDemographics', function() {
  return {
    restrict: 'A',
    scope: {
      encounter: "="
    },
    templateUrl: 'views/patient.demographics.html',

    link: function(scope, elem, attrs) {


    }
  };
});
