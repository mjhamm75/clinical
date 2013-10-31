'use strict';

angular.module('clinicalApp').filter('patientNameFirstLast', function() {
  return function(patient) {
    return patient.firstName + ' ' + patient.lastName;
  };
});

angular.module('clinicalApp').filter('patientDob', function() {
  return function(patient) {
    return patient.dateOfBirth;
  };
});

angular.module('clinicalApp').filter('patientPrimaryPayer', function() {
  return function(actors) {
    var primaryName = '';
    actors.forEach(function(actor){
      if(actor.type === 'PAYER_PRIMARY') {
        primaryName = actor.name;
      }
    });
    return primaryName;
  };
});

angular.module('clinicalApp').filter('statusName', function() {
  return function(actions) {
    var statusName = '';
    actions.forEach(function(action) {
      if(action.type === 'AUTO_AUTH' || action.type === "AUTO_EB") {
        statusName = action.status;
      }
    });
    return statusName;
  };
});

angular.module('clinicalApp').filter('statusDate', function() {
  return function(actions) {
    var statusName = '';
    actions.forEach(function(action) {
      if(action.type === 'AUTO_AUTH') {
        statusName = action.date;
      }
    });
    return statusName;
  };
});

angular.module('clinicalApp').filter('readableStatus', function() {
  return function(status) {
    if(status === undefined) {
      return '';
    }
    var words = status.split('_');
    var result = '';
    words.forEach(function(word) {
      result = result + word.charAt(0) + word.slice(1).toLowerCase()+ ' ';
    });
    return result.trim();
  };
});

angular.module('clinicalApp').filter('cssName', function() {
  return function(status){
    if(status === "UNKNOWN"){
      return 'label-inverse';
    } else if(status === 'NOT_STARTED') {
      return 'label-inverse';
    } else if(status === 'STARTING') {
      return 'label-inverse';
    } else if(status === 'BUILDING') {
      return 'label-inverse';
    } else if(status === 'ERROR_MISSING_DATA') {
      return 'label-inverse';
    } else if(status === 'SENT') {
      return 'label-inverse';
    } else if(status === 'CERTIFIED') {
      return 'label-inverse';
    } else if(status === 'DENIED') {
      return 'label-inverse';
    } else if(status === 'PENDED') {
      return 'label-warning';
    } else if(status === 'MODIFIED') {
      return 'label-warning';
    } else if(status === 'CANCELLED') {
      return 'label-inverse';
    } else if(status === 'NOT_REQUIRED') {
      return 'label-inverse';
    } else {
      return 'label-warning';
    }
  }
});
