(function(){
  function ModalCtrl($uibModalInstance, $scope, Room){

    $scope.createRoom = function(){
      $uibModalInstance.close($scope.addRoom);
    }

    $scope.dismiss = function(){
      $uibModalInstance.dismiss('cancel');
    }
  }

  angular
    .module('hoffyChat')
    .controller('ModalCtrl', ['$uibModalInstance', '$scope', 'Room', ModalCtrl]);
})();
