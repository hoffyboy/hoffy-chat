(function(){
  function Modal($uibModal){
    var Modal = {};

    Modal.open = function() {
      $uibModal.open({
        templateUrl: 'templates/modal.html',
        controller: 'ModalCtrl',
        controllerAs: '$ctrl'
      });
    }

    return Modal;
  }

  angular
  .module('blocChat')
  .factory('Modal', ['$uibModal', Modal]);
})();
