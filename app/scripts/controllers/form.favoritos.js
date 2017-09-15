(function(){
  'use strict';

  /**
   * @ngdoc function
   * @name practicaApp.controller:FormFavoritosCtrl
   * @description
   * # FormFavoritosCtrl
   * Controller of the practicaApp
   */
  angular.module('practicaApp')
    .controller('FormFavoritosCtrl',[
      'Favoritos',
       FormFavoritosCtrl

    ]);

      function FormFavoritosCtrl (Favoritos) {

          console.log('Favoritos')
          var
             vm = this;

          vm.favoritos = Favoritos.list();

          vm.remo = Favoritos.remove;

          vm.duple = Favoritos.duplicar;
      }

})();
