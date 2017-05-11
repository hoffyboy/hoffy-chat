(function() {
  function Cookies($cookies, $uibModal) {
    var currentUser = $cookies.get('hoffyChatCurrentUser');
    if (!currentUser || currentUser === '') {

      var modalInstance = $uibModal.open({
        templateUrl: 'templates/username.html',
        controller: 'UsernameCtrl',
        size: 'sm',
        backdrop: 'static',
      })

      modalInstance.result.then(function(result) {
      $cookies.put('hoffyChatCurrentUser', result);
      console.log(result);
    });
    }

    // $cookies.remove('hoffyChatCurrentUser');

  }

  angular
    .module('hoffyChat')
    .run(['$cookies', '$uibModal', Cookies]);
})();
