'use strict';

angular.module('clinicalApp').controller('FilterEncountersCtrl', function ($scope, $routeParams, $modal) {
  $scope.open = function() {
    var modalInstance = $modal.open({
      templateUrl:'views/filter.encounters.html',
      controller: 'FilterEncountersInstanceCtrl'
    });
  };
});

angular.module('clinicalApp').controller('FilterEncountersInstanceCtrl', function($scope, $rootScope, $modalInstance, encounterService) {
  $scope.model = {};
  $scope.ok = function() {

    encounterService.search({
      actorType: 'PROVIDER_REQUESTING',
      actorIds: $scope.model.facilityActorIds,
      actionStatuses: $scope.model.actionStatuses,
      actionType: 'AUTO_AUTH',
      limit: 10
    }, function(data) {
      $rootScope.$broadcast('encountersUpdated', data.encounters);
    });

    $modalInstance.close();
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };
});
