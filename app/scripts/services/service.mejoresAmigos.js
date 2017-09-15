(function(){
  'use strict';

  /**
   * @ngdoc function
   * @name practicaApp.service:MejoresAmigos
   * @description
   * # MejoresAmigos
   * Controller of the practicaApp
   */
  angular.module('practicaApp')
    .service('MejoresAmigos', [
      MejoresAmigos
    ]);

      function MejoresAmigos () {
        var
         imagePath = 'images/yeoman.png';

         var lista = [{
          face : imagePath,
          what: 'tita',
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
          // add: addMejoresAmigo,
          // remove: removeMejoresAmigo,
          // get: getMejoresAmigo,
          // favorites: getMejoresFavorites,
          list: listMejoresAmigos
        };

        function listMejoresAmigos(){
          return lista;
        }
      }

})();
