'use strict';

angular.module('clinicalApp').directive('newAuthForm', function (encounterFormService, providerService) {
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
      });

      providerService.search({
        limit: 2000,
        organizationId : '0001194'
      }, function(data) {
        scope.providers = data.providers;
      });

      scope.model = {};
      scope.model.diagnosisCodes = [];
      scope.model.procedureCodes = [];

      scope.addDiagnosisCode = function(newCode) {
        scope.model.diagnosisCodes.push(newCode);
      };

      scope.addProcedureCode = function(newCode) {
        scope.model.procedureCodes.push(newCode);
      };

      scope.getRequestTypeDropDown = function() {
        if(scope.dropDownConfigurations) {
          for(var i=0; i<scope.dropDownConfigurations.length; i++) {
            if(scope.dropDownConfigurations[i].field === 'requestType'){
              return scope.dropDownConfigurations[i];
            }
          }
        }

        // scope.dropDownConfigurations.forEach(function(entry) {
        //   if(entry.field === 'requestType') {
        //     return entry;
        //   }
        // });
      };

      scope.getServiceTypeDropDown = function(requestTypeValue) {
        for(var i=0; i<scope.dropDownConfigurations.length; i++) {
          if(scope.dropDownConfigurations[i].field === 'serviceType' && scope.hasDependency(requestTypeValue, scope.dropDownConfigurations[i].dependencies)){
            scope.serviceTypeDropDown = scope.dropDownConfigurations[i];
            return scope.dropDownConfigurations[i];
          }
        }
      };

      scope.getPlaceOfServiceDropDown = function (requestTypeValue) {
        for(var i=0; i<scope.dropDownConfigurations.length; i++) {
          if(scope.dropDownConfigurations[i].field === 'servicePlace' && scope.hasDependency(requestTypeValue, scope.dropDownConfigurations[i].dependencies)){
            scope.servicePlaceDropDown = scope.dropDownConfigurations[i];
            return scope.dropDownConfigurations[i];
          }
        }
      };

      scope.populateDropDowns = function(requestTypeValue) {
        scope.getPlaceOfServiceDropDown(requestTypeValue);
        scope.getServiceTypeDropDown(requestTypeValue);
      };


      scope.hasDependency = function(dependency, dependencyList) {
        if(dependencyList.requestType === dependency) {
          return true;
        }
        return false;
      };

      scope.submit = function() {
        scope.result = scope.model;
      };
    }
  };
});