(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {

      var modalInstance = $uibModal.open({
        templateUrl: 'templates/username.html',
        controller: 'UsernameCtrl',
        size: 'sm',
        backdrop: 'static',
      })

      modalInstance.result.then(function(result) {
      $cookies.put('blocChatCurrentUser', result);
      console.log(result);
    });
    }

    // $cookies.remove('blocChatCurrentUser');
    // console.log(currentUser);
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
