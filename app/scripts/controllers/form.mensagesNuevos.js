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
    .controller('FormMensagesNuevosCtrl',[
      '$rootScope',
      'Mensages',
      FormMensagesNuevosCtrl
    ]);


      function FormMensagesNuevosCtrl ($rootScope, Mensages) {
        console.log('amigos');
          var
           vm = this;

          vm.mensagesNuevos = Mensages;

          Mensages.list();

          vm.remo = Mensages.remove;

          vm.duple = Mensages.duplicar;

          vm.toggleMensages = Mensages.toggle;

          var fav = {
            usuario:'jose',
            asunto:'esso1',
            blog:'',
            mensaje:'bueno',
            //destino:'',
            tipo:'mensaje',
            estado:'',
            //comentario:'',
          }
          ;
          //    Mensages
          //    .loadMensages()
          //    .then(function(){
          //      Mensages.add(fav);
          //    })
          //  ;
    }
})();
