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
      .service('Mensages',[
        '$timeout',
        '$http',
        '$rootScope',
        '$state',
        '$mdDialog',
        Mensages,
      ]);

      function Mensages ($timeout, $http, $rootScope, $state, $mdDialog) {
        var
         vm = this,
         imagePath = 'images/yeoman.png',
         lista = [
      //     {
      //     face : imagePath,
      //     what: 'Jose',
      //     who: 'trash',
      //     when: '3:08PM',
      //     favorito: true,
      //     notes: " sotfware company"
      // },
      //    {
      //     face : imagePath,
      //     what: 'Andres',
      //     who: 'settings',
      //     when: '3:08AM',
      //     favorito: true,
      //     notes: " trabajador social"
      // },
      //    {
      //     face : imagePath,
      //     what: 'Contreras',
      //     who: 'peña',
      //     when: '4:08PM',
      //     favorito: false,
      //     notes: " mercadero en sena"
      // }
    ],
       obj ={
         getFullListMain: getFullListMain,
         fullListMain: [],
         search: {
           txt: '',
           filter: filterMensages
         },
           add: addMensages,
           remove: removeMensages,
           // get: getMensages,
           // favorites: getFavorites,
           list: listMensages,
           duplicar: duplicarMensages,
           toggle: toggleMensages,
           duplicarVariosMensges: duplicarVariosMensges,
           eliminarVariosMensages: eliminarVariosMensages,
           filterMensages: filterMensages,
           loadMensages: loadMensages
         };
        return obj;

          function getFullListMain(){
            return obj.fullListMain;
          }

          function loadMensages(){
            return $http
              .get('http://192.168.1.4:1338/comentario')
              .then(function(response){
                // console.log(response.headers())
                // console.log(response.data[1])
                // console.log(reso)
                // console.log(response)
                lista = response.data
                // $timeout(function(){
                  obj.fullListMain = response.data
                // }, 2000);
                console.log(lista);
                // console.log(obj.fullList);
              })
            ;
          }
        //mostrar datos

        function listMensages(){
          if(lista.length < 1){
            loadMensages();
          }
          return lista;
        }

        //agreegar mensages
        function addMensages(agregarMensages){
          console.log(agregarMensages)
          agregarMensages.destino = lista[0].usuario.id || lista[0].usuario;
          agregarMensages.usuario = lista[0].usuario.id || lista[0].usuario;
          agregarMensages.blog = lista[0].blog.id || lista[0].blog;
          agregarMensages.estado = lista[0].estado.id || lista[0].estado;
          $http
            .post('http://192.168.1.4:1338/comentario', agregarMensages )
            .then(function(response){
              // console.log(response.headers())
              // console.log(response.data[1])
              // console.log(reso)
               console.log(response)
              //lista = response.data;
              lista.push(agregarMensages);
            })
          ;

        }

        //eliminar datos
        function removeMensages($index, $event){
           var confirm = $mdDialog.confirm()
           .title('deseas borrar este elemento')
           .textContent('deseas borrar estemento')
           .targetEvent($event)
           .ok('si')
           .cancel('no')
           $mdDialog.show(confirm).then(function(){

             $http
               .delete('http://192.168.1.4:1338/comentario/' + lista[$index].id)
               .then(function(response){

                  console.log(response)
                 //lista = response.data;
                 console.log("eliminar",$index)
                 lista.splice($index, 1)

               })
             ;

           })

          }

        //duplicar Amigos
        function duplicarMensages($index){
          var obj = angular.copy(lista[$index])
          obj.activo = false
          lista.push(obj)
          }

          ////activar seleciinas mensages
        function toggleMensages($index){
          console.log($index)
          var obj = lista[$index]
          obj.activo = !obj.activo
          console.log(obj)
        }
        function duplicarVariosMensges(){
          console.log(lista.length)
        for(var i = 0; i < lista.length; i++){
          console.log(lista[i]);
           if (lista[i].activo) {
             duplicarMensages(i)
           }
        }
      }

        function eliminarVariosMensages(){
          console.log(lista.length)
          for(var i = 0; i < lista.length; i++){
            console.log(lista[i]);
            if (lista[i].activo) {
              lista.splice(i, 1)
              i--;
            }

          }

        }
        function filterMensages(item, idx, list){
          //console.log("Filter Buscar",item)
          var filter = false;
          // console.log(item, idx, list, $rootScope.buscarMain);
          // console.log(item);
          // if(
          //   item.usuario.email.indexOf(this.txt) > -1 ||
          //   item.asunto.indexOf(this.txt) > -1 ||
          //   item.blog.id.indexOf(this.txt) > -1 ||
          //   item.mensaje.indexOf(this.txt) > -1 ||
          //   item.createdAt.indexOf(this.txt) > -1 ||
          //   item.tipo.indexOf(this.txt) > -1 ||
          //   item.activo.indexOf(this.txt) > -1 ||
          //   item.titulo.indexOf(this.txt) > -1
          // ){
          //   filter = true;
          // }
          return true;
        }

        }

})();
