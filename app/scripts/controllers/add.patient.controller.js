'use strict';

angular.module('clinicalApp').controller('AddPatientCtrl', function ($scope, $routeParams, $modal, encounterService) {
  $scope.open = function() {
    var modalInstance = $modal.open({
      templateUrl:'views/add.patient.html',
      controller:'AddPatientInstanceCtrl'
    });
  }
});

var AddPatientInstanceCtrl = function($scope, $modalInstance, encounterService) {
  $scope.model = {};
  $scope.ok = function() {
    var result = {
      payer: $scope.model.payer,
      memberId: $scope.model.memberId,
      relationshipToSubscriber: $scope.model.relationshipToSubscriber,
      lastName: $scope.model.lastName,
      firstName: $scope.model.firstName,
      dateOfBirth: $scope.model.dateOfBirth
    }
    encounterService.newPatientResult = result;
    debugger;
    $modalInstance.close();
  }

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  }
}
