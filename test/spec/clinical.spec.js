'use strict';

describe('Clinical App', function() {

  var  template, element;

  beforeEach(module('clinicalApp'));

  describe('directives', function() {
    describe('clinicalHeader', function() {
      beforeEach(module('app/views/header.html'));

      beforeEach(inject(function($templateCache, $compile, $rootScope) {
        template = $templateCache.get('app/views/header.html');
        $templateCache.put('views/header.html', template);
        var directive = angular.element('<clinical-header></clinical-header>');
        element = $compile(directive)($rootScope);
        $rootScope.$digest();
      }));

      it('should have a list of links', function() {
        var links = element.find('a');
        expect(links.length).toBe(4);
        expect(links[1].text.trim()).toBe('Patient');
        expect(links[2].text.trim()).toBe('Export');
        expect(links[3].text.trim()).toBe('Filter');
      });
    });

    describe('encounterList', function() {
    });

    describe('chatContainer', function() {

    });

  });

  describe('services', function(){

  });

  describe('controllers', function() {

  });

  describe('filters', function() {

  });
});