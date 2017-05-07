(function(){
  function HomeCtrl(Room, $scope, Message, $uibModal){

    $scope.rooms = Room.all;

    $scope.open = function() {
      var modalInstance = $uibModal.open({
        templateUrl: 'templates/modal.html',
        controller: 'ModalCtrl',
        size: 'sm',
      });
      modalInstance.result.then(function(room) {
        Room.add({$value: room});
      });
    }

    $scope.selectRoom = function(name){
      $scope.activeRoom = name;
    }

    $scope.getRoomId = function(roomId){
      $scope.messages = Message.getByRoomId(roomId);
    }
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$scope', 'Message', '$uibModal', HomeCtrl]);
})();
