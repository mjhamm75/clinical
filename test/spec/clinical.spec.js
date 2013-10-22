'use strict';

describe('Clinical App', function() {

  beforeEach(module('clinicalApp'));
  var element, scope;

  describe('clinicalHeader', function() {
    beforeEach(inject(function($rootScope, $compile) {
      scope = $rootScope;

      element = '<ul><li>Jason</li><li>Hamm</li><li>Test</li></li>';

      $compile(element)(scope);
      scope.$digest();
    }));

    it('should have a list', function() {
      var list = element.find('li');
      expect(list.length).toBe(3);
    });
  });
});