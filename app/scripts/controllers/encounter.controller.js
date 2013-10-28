'use strict';

angular.module('clinicalApp').controller('EncounterCtrl', function ($scope, $routeParams , encounterService, encounterFormService) {
  encounterService.search({
    actorType: 'PROVIDER_REQUESTING',
    actorIds: '0001194',
    actionStatuses: 'NOT_STARTED',
    actionType: 'AUTO_AUTH',
    limit: 10
  }, function(data) {
    $scope.encounters = data.encounters;
    // debugger;
  });
});
