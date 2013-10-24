'use strict';

angular.module('clinicalApp').controller('AddPatientCtrl', function ($scope, $routeParams, $modal) {
  $scope.open = function() {
    var modalInstance = $modal.open({
      templateUrl:'views/add.patient.html',
      controller: 'AddPatientInstanceCtrl'
    });
  };
});

angular.module('clinicalApp').controller('AddPatientInstanceCtrl', function($scope, $modalInstance, encounterService) {
  $scope.model = {};
  $scope.ok = function() {
    var result = {
      payer: $scope.model.payer,
      memberId: $scope.model.memberId,
      relationshipToSubscriber: $scope.model.relationshipToSubscriber,
      lastName: $scope.model.lastName,
      firstName: $scope.model.firstName
    };
    encounterService.newPatientResult = result;
    $modalInstance.close();
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };
});