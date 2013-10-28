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
    debugger;
    var result = {
      payer: $scope.model.payer,
      memberId: $scope.model.memberId,
      relationshipToSubscriber: $scope.model.relationshipToSubscriber,
      lastName: $scope.model.lastName,
      firstName: $scope.model.firstName,
      dateOfBirth: $scope.model.dateOfBirth.toISOString()
    }
    encounterService.newPatientResult = result;
    debugger;
    $modalInstance.close();
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };
});
