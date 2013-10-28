'use strict';

angular.module('clinicalApp').factory('encounterFormService', function ($resource, $rootScope) {
  var EncounterFormService = $resource('http://localhost:8280/v1/form-configuration/encounter-auth', {port: ':8280'}, {
    search: {
      method: 'GET',
      headers: {
        'RemoteUser': 'jhornsby',
        'Content-Type': 'application/json'
      }
    }
  });
  return EncounterFormService;
});
