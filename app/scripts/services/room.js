(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.add = function(room){
      rooms.$add(room);
    }

    // Room.loaded = function()

  //   Room.loaded = rooms.$loaded(function(){
  //   console.log(rooms.$keyAt(0));
  // });
    // console.log(Room.initRoom);

    Room.all = rooms;

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
