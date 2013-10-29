'use strict';

angular.module('clinicalApp').factory('providerService', function ($resource) {
  var ProviderService = $resource('http://localhost:port/v1/express-providers/:providerId', {providerId:'@id', port: ':8280'}, {
    search: {
      method: 'GET',
      headers: {
        'RemoteUser': 'jhornsby',
        'Content-Type': 'application/json'
      }
    }
  });
  return ProviderService;
});
