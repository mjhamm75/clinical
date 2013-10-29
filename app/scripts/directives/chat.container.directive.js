'use strict';

angular.module('clinicalApp').directive('chatContainer', ['encounterService', function(encounterService) {
  return {
    scope: {
      maxChatCount: '='
    },

    templateUrl: 'views/chat.container.html',

    link: function(scope) {
      scope.countRemaining = scope.maxChatCount;

      scope.$on('selectedEncounter', function(event, data) {
        scope.encounter = data;
        scope.messages = data.comments;
      });

      scope.updateCount = function(chatText) {
        scope.countRemaining = scope.maxChatCount - chatText.length;
      };

      scope.addMessage = function(message) {
        scope.encounter.comments.push({message: message});
        encounterService.save({}, scope.encounter);
        scope.resetChat();
      };

      scope.resetChat = function() {
        scope.chatText = '';
        scope.updateCount(scope.chatText);
      };
    }
  };
}]);