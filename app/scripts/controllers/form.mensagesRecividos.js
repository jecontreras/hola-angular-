(function(){
  'use strict';

  /**
   * @ngdoc function
   * @name practicaApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the practicaApp
   */
  angular.module('practicaApp')
    .controller('FormMensagesRecividosCtrl',[
      'MensagesRecividos',
      FormMensagesRecividosCtrl
    ]);

    function FormMensagesRecividosCtrl (MensagesRecividos) {
        console.log('Mensages Recividos')
          var
            vm = this;

          vm.mensagesRecividos = MensagesRecividos.list();

    }

})();
