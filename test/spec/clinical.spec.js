'use strict';

describe('Clinical App', function() {

  var element, $scope, template;
  beforeEach(module('clinicalApp'));

  describe('clinicalHeader', function() {
    beforeEach(module('views/header.html'));

    beforeEach(inject(function($templateCache, $rootScope, $compile) {
      $scope = $rootScope;
      element = angular.element('<clinical-header></clinical-header>');
      element = $compile(template)($rootScope);
      $scope.$digest();
    }));

    it('should have a list', function() {
      var list = element.find('li');
      expect(list.length).toBe(3);
    });
  });
});