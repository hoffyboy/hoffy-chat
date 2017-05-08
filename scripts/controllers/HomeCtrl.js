(function(){
  function HomeCtrl(Room, $scope, Message, $uibModal, $filter){

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

    $scope.send = function(newMessage){
      if ($scope.newMessage){
        Message.send(newMessage);
        $scope.newMessage = "";
      }
    }

    $scope.date = function(i, first){
      var filteredDate = $filter('date')($scope.messages[i].sentAt, 'EEEE, MMM d');
      var filteredPreviousDate = $filter('date')($scope.messages[i - 1].sentAt, 'EEEE, MMM d');

      if(filteredDate !== filteredPreviousDate){
        return true
      } else if (first) {
        return true
      }
}
}

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$scope', 'Message', '$uibModal', '$filter', HomeCtrl]);
})();
