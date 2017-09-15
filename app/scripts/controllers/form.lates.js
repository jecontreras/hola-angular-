(function(){
  'use strict';

  /**
   * @ngdoc function
   * @name practicaApp.controller:FormLatesCtrl
   * @description
   * # FormLatesCtrl
   * Controller of the practicaApp
   */
  angular.module('practicaApp')
    .controller('FormLatesCtrl',[
      'Lates',
      FormLatesCtrl

    ]);


        function FormLatesCtrl (Lates) {
          console.log('LASTEST')
        var
         vm = this;

        vm.lates = Lates;
        Lates.list();

        vm.remo = Lates.remove;

        vm.duple = Lates.duplicar;

        vm.toggleUsuario = Lates.toggle;

   }

})();
