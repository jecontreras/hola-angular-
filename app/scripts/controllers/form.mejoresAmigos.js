(function(){
  'use strict';

  /**
   * @ngdoc function
   * @name practicaApp.controller:FormMejoresAmigosCtrl
   * @description
   * # FormMejoresAmigosCtrl
   * Controller of the practicaApp
   */
   angular.module('practicaApp')
     .controller('FormMejoresAmigosCtrl',[

       'MejoresAmigos',

       FormMejoresAmigosCtrl
     ]);

       function FormMejoresAmigosCtrl (MejoresAmigos) {
       var
        vm = this;

       vm.mejoresAmigos = MejoresAmigos.list();

   }

})();
