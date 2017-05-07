(function(){
  function HomeCtrl(Room, $scope, Message, $uibModal){

    $scope.rooms = Room.all;

    $scope.open = function() {
      var modalInstance = $uibModal.open({
        templateUrl: 'templates/modal.html',
        controller: 'ModalCtrl',
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

    $scope.initRoom = Room.loaded;
  }


  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$scope', 'Message', '$uibModal', HomeCtrl]);
})();
