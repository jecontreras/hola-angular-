(function(){
  'use strict';

  /**
   * @ngdoc function
   * @name practicaApp.service:MesagesRecividos
   * @description
   * # MensagesRecividos
   * Controller of the practicaApp
   */
  angular.module('practicaApp')
    .service('MensagesRecividos', [
      MensagesRecividos
    ]);

      function MensagesRecividos () {

        var
         imagePath = 'images/yeoman.png';
        
        var lista = [{
          face : imagePath,
          what: 'Jose',
          who: 'trash',
          when: '3:08PM',
          favorito: true,
          notes: " I'll be in your neighborhood doing errands"
      },
         {
          face : imagePath,
          what: 'Andres',
          who: 'settings',
          when: '3:08PM',
          favorito: true,
          notes: " I'll be in your neighborhood doing errands"
      },
         {
          face : imagePath,
          what: 'Contreras',
          when: '3:08PM',
          favorito: false,
          notes: " I'll be in your neighborhood doing errands"
      }];
        return {
          // add: addMensagesRecividos,
          // remove: removeMensagesRecividos,
          // get: getMensagesRecividos,
          // favorites: getMensagesRecividos,
          list: listMensagesRecividos
        };

        function listMensagesRecividos(){
          return lista;
        }
      }

})();
