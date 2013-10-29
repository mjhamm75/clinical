'use strict';

angular.module('clinicalApp').directive('chatContainer', ['encounterService', function(encounterService) {
  return {
    scope: {
      count: '='
    },

    templateUrl: 'views/chat.container.html',

    link: function(scope) {
      scope.countStart = scope.count;

      scope.$on('selectedEncounter', function(event, data) {
        scope.encounter = data;
      });

      scope.updateCount = function(chatText) {
        scope.count = scope.countStart - chatText.length;
      };

      scope.addMessage = function(message) {
        encounterService.save({
          id: scope.encounter.id
        });
        scope.resetChat();
      };

      scope.resetChat = function() {
        scope.chatText = '';
        scope.updateCount(scope.chatText);
      };
    }
  };
}]);