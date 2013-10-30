'use strict';

angular.module('clinicalApp').controller('EncounterCtrl', function ($scope, $routeParams , encounterService) {
  encounterService.search({
    actorType: 'PROVIDER_REQUESTING',
    actorId: '0001194',
    actionStatus: 'BUILDING',//NOT_STARTED
    actionType: 'AUTO_EB',//AUTO_AUTH
    limit: 10
  }, function(data) {
    $scope.encounters = data.encounters;
  });

  $scope.$on('encountersUpdated', function(data, encounters) {
    $scope.encounters = encounters;
  });

  if($routeParams.id){
    encounterService.search({
      encounterId: $routeParams.id
    }, function(data) {
      $scope.encounter = data.encounter;
    });
  }

});