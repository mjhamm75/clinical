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
    
    var encounter = {};

    encounter.actors = [];
    encounter.actors.push({"id" : "0001194", "type" : "PROVIDER_REQUESTING"});
    encounter.actors.push({"id": $scope.model.payer, "type":"PAYER_PRIMARY"});

    encounter.patient = {};
    encounter.patient.lastName = $scope.model.lastName;
    encounter.patient.firstName = $scope.model.firstName;
    encounter.patient.relationship = $scope.model.relationshipToSubscriber;
    encounter.patient.ids = [];
    encounter.patient.ids.push({"type": "PATIENT_ID", "value": $scope.model.memberId});

    encounter.actions = [];
    encounter.actions.push({
      "actionType" : "AUTO_AUTH",
      "type" : "AUTO_EB",
      "status": "NOT_STARTED",
      "senderId": "0001194",
      "receiverId": $scope.model.payer,
    });
    debugger;
    encounterService.create({}, encounter, function(data){
    });
    $modalInstance.close();
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };
});
