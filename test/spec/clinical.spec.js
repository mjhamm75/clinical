'use strict';

describe('Clinical App', function() {

  var element, $scope;
  beforeEach(module('clinicalApp'));

  describe('clinicalHeader', function() {
    beforeEach(inject(function($rootScope, $compile) {
      $scope = $rootScope;
      element = '<ul><li>Jason</li><li>Hamm</li><li>Test</li></li>';
      element = $compile(element)($rootScope);
      $scope.$digest();
    }));

    it('should have a list', function() {
      var list = element.find('li');
      expect(list.length).toBe(3);
    });
  });
});