(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");

    Message.getByRoomId = function(roomId) {
      var filtered = ref.orderByChild("roomId").equalTo(roomId);
      var messages = $firebaseArray(filtered);
      console.log(messages);
      return messages
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
