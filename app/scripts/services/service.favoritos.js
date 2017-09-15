(function(){
  'use strict';

  /**
   * @ngdoc function
   * @name practicaApp.service:Favoritos
   * @description
   * # Favoritos
   * Controller of the practicaApp
   */
  angular.module('practicaApp')
    .service('Favoritos', [
      Favoritos
    ]);

      function Favoritos () {

        var
        imagePath = 'images/yeoman.png';

       var lista = [{
         face : imagePath,
         what: 'Jose',
         who: 'contreras',
         when: '3:08PM',
         favorito: true,
         notes: " I'll be in your neighborhood doing errands"
     }];

        return {
           add: addFavoritos,
           remove: removeFavoritos,
           get: getFavoritos,
          // favorites: getFavorites,
           list: listFavoritos,
           duplicar:duplicarFavoritos
        };

        function listFavoritos(){
          return lista;

        }

        //agregar datos
        function addFavoritos(agregarLates){
          lista.push(agregarLates);
        }

        //eliminar datos
        function removeFavoritos($index){
           console.log("eliminar",$index)
            lista.splice($index, 1)

        }

        //duplicar amigos
        function getFavoritos(){
            console.log("1")
            lista.push();
        }

        //duplicar Amigos
        function duplicarFavoritos($index){
          var obj = angular.copy(lista[$index])
          lista.push(obj)
        }
      }

})();
