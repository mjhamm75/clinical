'use strict';

angular.module('clinicalApp').controller('FilterEncountersCtrl', function ($scope, $routeParams, $modal) {
  $scope.open = function() {
    var modalInstance = $modal.open({
      templateUrl:'views/filter.encounters.html',
      controller: 'FilterEncountersInstanceCtrl'
    });
  };
});

angular.module('clinicalApp').controller('FilterEncountersInstanceCtrl', function($scope, $modalInstance, encounterService) {
  $scope.model = {};
  $scope.ok = function() {
    var result = {
      payer: $scope.model.payer,
      memberId: $scope.model.memberId,
      relationshipToSubscriber: $scope.model.relationshipToSubscriber,
      lastName: $scope.model.lastName,
      firstName: $scope.model.firstName,
      dateOfBirth: $scope.model.dateOfBirth.toISOString()
    };
    encounterService.newPatientResult = result;
    $modalInstance.close();
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };
});
