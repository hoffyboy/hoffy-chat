(function(){
  function ModalCtrl(Modal, $uibModalInstance, $scope, Room){

    rooms = Room.all;

    $scope.createRoom = function(){
      $uibModalInstance.close(rooms.$add({$value: $scope.addRoom}));
    }

    $scope.dismiss = function(){
      $uibModalInstance.dismiss('cancel');
    }


}
  angular
    .module('blocChat')
    .controller('ModalCtrl', ['Modal', '$uibModalInstance', '$scope', 'Room', ModalCtrl]);
})();
