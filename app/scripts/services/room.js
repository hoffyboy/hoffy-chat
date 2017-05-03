(function() {
  function Room($firebaseArray) {
   var ref = firebase.database().ref().child("rooms");
   var rooms = $firebaseArray(ref);


   rooms.$loaded()
    .then(function(){
      for(var i = 0; i < rooms.length; i++){
        console.log(rooms[i])
      }
    });

   return {
     all: rooms
   };
 }



  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
