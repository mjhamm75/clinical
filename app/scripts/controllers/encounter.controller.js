'use strict';

angular.module('clinicalApp').controller('EncounterCtrl', function ($scope, $routeParams , encounterService) {
  encounterService.search({
    actorType: 'PROVIDER_REQUESTING',
    actorIds: '0001194',
    actionStatuses: 'NOT_STARTED',
    actionType: 'AUTO_AUTH',
    limit: 10
  }, function(data) {
    $scope.encounters = data.encounters;
  });

  $scope.$on('selectedRow', function(event, data) {
    debugger;
    $scope.selectedIndex = data.rowIndex;
    $scope.selectedEncounter = $scope.encounters[data.rowIndex];
  });
});
