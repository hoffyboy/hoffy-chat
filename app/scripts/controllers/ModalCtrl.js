(function(){
  function ModalCtrl(Modal, $uibModalInstance, $scope, Room){

    $scope.createRoom = function(){
      $uibModalInstance.close(Room.add({$value: $scope.addRoom}));
    }

    $scope.dismiss = function(){
      $uibModalInstance.dismiss('cancel');
    }

}
  angular
    .module('blocChat')
    .controller('ModalCtrl', ['Modal', '$uibModalInstance', '$scope', 'Room', ModalCtrl]);
})();
