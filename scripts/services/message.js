(function() {
  function Message($firebaseArray, $cookies) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages;
    var roomIdentity;

    Message.getByRoomId = function(roomId) {
      var filtered = ref.orderByChild("roomId").equalTo(roomId);
      messages = $firebaseArray(filtered);
      roomIdentity = roomId;
      return messages
    };

    Message.send = function(newMessage) {
      messages.$add({
        content: newMessage,
        roomId: roomIdentity,
        sentAt: Date.now(),
        username: $cookies.get('blocChatCurrentUser'),
      });
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
