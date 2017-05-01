(function(){
  function HomeCtrl(Room, $scope){

    $scope.rooms = Room.all;

    // console.log($scope.rooms);

  }


  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$scope', HomeCtrl]);
})();
