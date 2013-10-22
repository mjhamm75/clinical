'use strict';

describe('Clinical App', function() {

  var element, $scope, template;
  beforeEach(module('clinicalApp'));

  describe('clinicalHeader', function() {
    beforeEach(module('app/views/header.html'));

    beforeEach(inject(function($templateCache, $rootScope, $compile) {
      $scope = $rootScope;
      template = $templateCache.get('app/views/header.html');
      $templateCache.put('views/header.html');
      element = angular.element('<clinical-header></clinical-header>');
      element = $compile(template)($rootScope);
      $scope.$digest();
    }));

    it('should have a list of links', function() {
      var links = element.find('a');
      expect(links.length).toBe(4);
      expect(links[1].text.trim()).toBe('Patient');
      expect(links[2].text.trim()).toBe('Export');
      expect(links[3].text.trim()).toBe('Filter');
    });
  });
});