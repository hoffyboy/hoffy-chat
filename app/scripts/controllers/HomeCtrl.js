(function(){
  function HomeCtrl(Room, $scope, Modal){

    $scope.rooms = Room.all;

    $scope.open = Modal.open;
  }


  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$scope', 'Modal', HomeCtrl]);
})();
