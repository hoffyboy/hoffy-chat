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

    // messages.$loaded(function(){
    //   // var filteredDate = $filter('date')($scope.messages[0].sentAt, 'EEEE, MMM d');


    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
