'use strict';

angular.module('clinicalApp').directive('newAuthForm', function (encounterFormService) {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'views/new.auth.form.html',
    scope: {
      encounters : '='
    },

    link: function(scope) {
      encounterFormService.search({}, function(data){
        scope.dropDownConfigurations = data.formConfiguration.dropDownConfigurations;
        scope.requestTypeDropDown = scope.getRequestTypeDropDown();
        // debugger;
      });

      scope.getRequestTypeDropDown = function() {
        if(scope.dropDownConfigurations) {
          for(var i=0; i<scope.dropDownConfigurations.length; i++) {
            if(scope.dropDownConfigurations[i].field === 'requestType'){
              return scope.dropDownConfigurations[i];
            }
          }
        }
      }

    }
  };
});