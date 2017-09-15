(function(){
  'use strict';

  /**
   * @ngdoc function
   * @name practicaApp.service:Lates
   * @description
   * # Lates
   * Controller of the practicaApp
   */
  angular.module('practicaApp')
    .service('Lates', [
      '$http',
      '$timeout',
      Lates
    ]);

      function Lates ($http, $timeout) {
        var
         imagePath = 'images/yeoman.png';
        var lista =[
      //     {
      //     face : imagePath,
      //     what: 'ester',
      //     who: 'contreras',
      //     when: '3:18PM',
      //     favorito: true,
      //     notes: " I'll be in your neighborhood doing errands"
      // },
      //    {
      //     face : imagePath,
      //     what: 'Andres',
      //     who: 'peña',
      //     when: '3:18AM',
      //     favorito: true,
      //     notes: " I'll be in your neighborhood doing errands"
      // },
      //    {
      //     face : imagePath,
      //     what: 'ester',
      //     who:'peña',
      //     when: '4:08PM',
      //     favorito: false,
      //     notes: " I'll be in your neighborhood doing errands"
      // }
    ],
       obj ={
         getFullListLates: getFullListLates,
         fullListLates: [],
         search: {
           txt: '',
           filter: filterLates
         },
         add: addLates,
         remove: removeLates,
         // get: getLates,
         // favorites: getLates,
         list: listLates,
         duplicar: duplicarLates,
         filterLates: filterLates,
         toggle: toggleUsuario,
         duplicarVarios: duplicarVarios,
         eliminarVarios: eliminarVarios,

       }

        return obj

           function getFullListLates(){
             return obj.fullListLates;
           }

        //mostrar datos
        function listLates(){
          if (lista.length <1) {
            $http
              .get('http://192.168.1.4:1338/usuario')
              .then(function(response){
                // console.log(response.headers())
                // console.log(response.data[1])
                // console.log(reso)
                 //console.log(response.data[1])
                lista = response.data
                $timeout(function(){
                  obj.fullListLates = response.data
                }, 2000);
                // console.log(lista);
                // console.log(obj.fullList);
              })
            ;
          }
          return lista;

        }
        //agregar datos
        function addLates(agregarLates){
          lista.push(agregarLates);
        }

        //eliminar datos
        function removeLates($index){
           console.log("eliminar",$index)
            lista.splice($index, 1)

        }

        //duplicar Amigos
        function duplicarLates($index){
          var obj = angular.copy(lista[$index])
          obj.activo = false
          lista.push(obj)
        }

        //activar seleciinas usuarios
        function toggleUsuario ($index){
          console.log($index)
          var obj = lista[$index]
          obj.activo = !obj.activo
          console.log(obj)

        }

        //duplicar selecionadas
        function duplicarVarios (){
          console.log(lista.length)
          for(var i=0; i < lista.length; i++ ){
            console.log(lista[i]);
            if (lista[i].activo) {
              duplicarLates(i)

            }
          }
        }

        //eliminar selecionadas
        function eliminarVarios(){
          console.log(lista.length)
          for(var i=0; i < lista.length; i++ ){
            console.log(lista[i]);
            if (lista[i].activo) {
              removeLates(i)
              i--;

            }
          }
        }




        function filterLates(item, idx, list){
          //console.log("Filter Buscar",item)
          var filter = false;

          //  //console.log(this.txt);
          // if(
          //   item.notes.indexOf(this.txt) > -1 ||
          //   item.what.indexOf(this.txt) > -1 ||
          //   item.who.indexOf(this.txt) > -1 ||
          //   item.when.indexOf(this.txt) > -1
          // ){
          //   filter = true;
          // }
          return true;
        }
      }

})();
