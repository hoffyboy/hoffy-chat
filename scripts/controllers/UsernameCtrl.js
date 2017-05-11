(function(){
  function UsernameCtrl($uibModalInstance, $scope){

    $scope.setUsername = function(){
      if ($scope.username) {
        $uibModalInstance.close($scope.username);
      }
    }
  }

  angular
    .module('hoffyChat')
    .controller('UsernameCtrl', ['$uibModalInstance', '$scope', UsernameCtrl]);
})();
