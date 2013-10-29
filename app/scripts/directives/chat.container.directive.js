'use strict';

angular.module('clinicalApp').directive('chatContainer', function() {
  return {
    scope: {
      maxChatCount: '='
    },

    templateUrl: 'views/chat.container.html',

    link: function(scope) {
      scope.countRemaining = scope.maxChatCount;

      scope.$on('selectedEncounter', function(event, data) {
        scope.encounter = data;
      });

      scope.updateCount = function(chatText) {
        scope.countRemaining = scope.maxChatCount - chatText.length;
      };

      scope.addMessage = function() {
        // encounterService.save({
        //   id: scope.encounter.id
        // });
        scope.resetChat();
      };

      scope.resetChat = function() {
        scope.chatText = '';
        scope.updateCount(scope.chatText);
      };
    }
  };
});