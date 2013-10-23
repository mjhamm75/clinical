'use strict';

describe('Clinical App', function() {

  var  template, element, httpBackend; 

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
      beforeEach(module('app/views/encounter.item.table.html'));
      beforeEach(inject(function($templateCache, $compile, $injector, $rootScope) {
        template = $templateCache.get('app/views/encounter.item.table.html');
        $templateCache.put('views/encounter.item.table.html', template);
        debugger;
        loadJSONFixtures('base/test/mocks/encounters.json');
        $rootScope.encounters = getJSONFixture('base/test/mocks/encounters.json');
        //**********
        // $rootScope.encounters = ;
        //**********
        var directive = angular.element('<div encounter-item-table encounters="encounters"></div>');
        element = $compile(directive)($rootScope);
        $rootScope.$digest();
      }));

      it('should give a table of encounters', function() {
        // console.log(element);
        // console.log(element.scope().encounters[0].patient.firstName);
        expect(element.scope().encounters.length).toEqual(5);
        expect(element.scope().encounters[0].patient.firstName).toEqual('TED');
      });
    });

    describe('chatContainer', function() {

    });

  });

  describe('services', function(){

  });

  describe('controllers', function() {

  });

  describe('filters', function() {
    describe('patientNameFirstLast', function() {
      it('should return the first name followed by the last name', inject(function(patientNameFirstLastFilter) {
        expect(patientNameFirstLastFilter({firstName:'John', lastName:'Doe'})).toEqual('John Doe');
        expect(patientNameFirstLastFilter({firstName:'first name', lastName:'last name'})).toEqual('first name last name');
      }));
    });

    describe('patientDob', function() {
      it('should return the patients date of birth', inject(function(patientDobFilter) {
        expect(patientDobFilter({dateOfBirth:'date of birth'})).toEqual('date of birth');
        expect(patientDobFilter({dateOfBirth:'2013-09-24T19:12:14.000+0000'})).toEqual('2013-09-24T19:12:14.000+0000');
      }));
    });

    describe('patientDob', function() {
      it('should return the patients date of birth', inject(function(patientDobFilter) {
        expect(patientDobFilter({dateOfBirth:'date of birth'})).toEqual('date of birth');
        expect(patientDobFilter({dateOfBirth:'1962-02-11T05:00:00.000+0000'})).toEqual('1962-02-11T05:00:00.000+0000');
      }));
    });

    describe('patientPrimaryPayer', function() {
      it('should return the primary payer name if the actor type is payer primary', inject(function(patientPrimaryPayerFilter) {
        expect(patientPrimaryPayerFilter([{name:'payerName', type:'PAYER_PRIMARY'}])).toEqual('payerName');
        expect(patientPrimaryPayerFilter([{name:'BCBSF / FL', type:'PAYER_PRIMARY'}])).toEqual('BCBSF / FL');
        expect(patientPrimaryPayerFilter([{name:'yet another payer name', type:'PAYER_PRIMARY'}])).toEqual('yet another payer name');
        expect(patientPrimaryPayerFilter([{name:'yet another payer name', type:'SOMETHING_ELSE'}])).toEqual('');
      }));
    });

    describe('statusName', function() {
      it('should return the statusName of the AUTO_AUTH action passed in', inject(function(statusNameFilter) {
        expect(statusNameFilter([{type:'AUTO_AUTH', status:'ERROR_MISSING_DATA'}])).toEqual('ERROR_MISSING_DATA');
        expect(statusNameFilter([{type:'AUTO_AUTH', status:'someStatus'}])).toEqual('someStatus');
        expect(statusNameFilter([{type:'SOMETHING_ELSE', status:'ERROR_MISSING_DATA'}])).toEqual('');
      }));
    });

    //question here
    describe('statusDate', function() {
      it('should return the statusDate of the AUTO_AUTH action passed in', inject(function(statusDateFilter) {
        expect(statusDateFilter([{type:'AUTO_AUTH', status:'ERROR_MISSING_DATA', date:'2013-10-04T17:21:59.703+0000'}])).toEqual('2013-10-04T17:21:59.703+0000');
        expect(statusDateFilter([{type:'AUTO_AUTH', status:'someStatus', date:'1962-02-11T05:00:00.000+0000'}])).toEqual('1962-02-11T05:00:00.000+0000');
        expect(statusDateFilter([{type:'SOMETHING_ELSE', status:'ERROR_MISSING_DATA', date:'the date'}])).toEqual('');
        expect(statusDateFilter([{type:'SOMETHING_ELSE', status:'ERROR_MISSING_DATA'}])).toEqual('');
      }));
    });

    describe('readableStatus', function() {
      it('should turn upper case underscore delimited string into capitalized space delimited string e.g. HELLO_WORLD -> Hello World', inject(function(readableStatusFilter) {
        expect(readableStatusFilter('TEST_STRING')).toEqual('Test String');
        expect(readableStatusFilter('ONE_TWO')).toEqual('One Two');
        expect(readableStatusFilter('ERROR_MISSING_DATA')).toEqual('Error Missing Data');
      }));
    });

    describe('cssName', function() {
      it('should return the arbitrary css class associated with the status string', inject(function(cssNameFilter) {
        expect(cssNameFilter('UNKNOWN')).toEqual('label-inverse');
        expect(cssNameFilter('NOT_STARTED')).toEqual('label-inverse');
        expect(cssNameFilter('STARTING')).toEqual('label-inverse');
        expect(cssNameFilter('BUILDING')).toEqual('label-inverse');
        expect(cssNameFilter('ERROR_MISSING_DATA')).toEqual('label-inverse');
        expect(cssNameFilter('SENT')).toEqual('label-inverse');
        expect(cssNameFilter('CERTIFIED')).toEqual('label-inverse');
        expect(cssNameFilter('DENIED')).toEqual('label-inverse');
        expect(cssNameFilter('CANCELLED')).toEqual('label-inverse');
        expect(cssNameFilter('NOT_REQUIRED')).toEqual('label-inverse');
        expect(cssNameFilter('PENDED')).toEqual('label-warning');
        expect(cssNameFilter('MODIFIED')).toEqual('label-warning');
        expect(cssNameFilter('somethingRandom')).toEqual('label-warning');
      }));
    });

  });
});