(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.add = function(room){
      rooms.$add(room);
    }

    Room.all = rooms;

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
