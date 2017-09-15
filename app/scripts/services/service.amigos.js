(function(){
  'use strict';

  /**
   * @ngdoc function
   * @name practicaApp.service:Amigos
   * @description
   * # Amigos
   * Controller of the practicaApp
   */
  angular.module('practicaApp')
    .service('Amigos', [
      '$timeout',
      '$http',
      '$rootScope',
      '$state',
      '$mdDialog',
      '$stateParams',
      Amigos
    ]);

      function Amigos ($timeout, $http, $rootScope, $state, $mdDialog, $stateParams) {
        var
          vm = this,
          imagePath = 'images/yeoman.png',
          token = '',
          lista = [
          //   {
          //     face : imagePath,
          //     nombre: 'Andres',
          //     email: 'peña',
          //     createdAt: '3:18AM',
          //     emailactive: true,
          //     username: " I'll be in your neighborhood doing errands"
          // },
          //    {
          //     face : imagePath,
          //     nombre: 'Jose',
          //     email: 'peña',
          //     createdAt: '3:18AM',
          //     emailactive: true,
          //     username: " I'll be in your neighborhood doing errands"
          // },
          //    {
          //    face : imagePath,
          //    nombre: 'Areolfo',
          //    email: 'peña',
          //    createdAt: '3:18AM',
          //    emailactive: true,
          //    username: " I'll be in your neighborhood doing errands"
          // }
        ],
        obj = {
          getFullList: getFullList,
          fullList: [],
          search: {
            txt: '',
            filter: filterAmigos
          },
          add: addAmigo,
          remove: removeAmigo,
          // get: getAmigo,
          // favorites: getFavorites,
          list: listAmigos,
          duplicar: duplicarAmigos,
          toggle: toggleUsuario,
          duplicarVarios: duplicarVarios,
          eliminarVarios: eliminarVarios,
          filterAmigos: filterAmigos,
          loadAmigos: loadAmigos,
          login: login,
          getToken: getToken,

         }
        //listAmigos();
        return obj;

        function getFullList(){
          //console.log(obj.fullList)
          return obj.fullList;
        }


         function loadAmigos(){
          return $http
           .get('http://192.168.1.4:1338/usuario')
           .then(function(response){

             lista = response.data
            //  $timeout(function(){
               obj.fullList = response.data
            //  }, 2000);
              console.log(lista);
             //console.log(obj.fullList);
           })
           ;
         }

         //token html

         function getToken (miToken) {
         return $http
         .post('http://192.168.1.4:1338/usuario/identify', {token : miToken})
         .then(function(success){
           console.log(success);
           return success;
           // console.log(success);
         }, function(error){
           return error;
           // console.error(error);
         }).catch(function(error){
        });
      }

         //mostras lista
         function listAmigos(){

           if(lista.length < 1){
              loadAmigos();
           }
           return lista;
         }



         function login(auto){
           console.log(auto)
           return $http
            .post('http://192.168.1.4:1338/usuario/authenticate', auto)
              .then(function(response){
                 return response;
              })
              .catch(function(error){
                 console.error('errror', error);
                 return error;
              })
           ;

         }


        //agregar datos
        function addAmigo(agregar){
          console.log(agregar)
          agregar.rol = lista[0].rol.id || lista[0].nombre;
          $http
           .post('http://192.168.1.4:1338/usuario', agregar )
           .then(function(response){
             //  $timeout(function(){
             console.log(response)

             lista.push(agregar)

           })
          ;

      }
        //eliminar datos
        function removeAmigo($index, $event){

           var confirm = $mdDialog.confirm()
           .title('deseas borrar este elemento')
           .textContent('deseas borrar este elemento')
           .targetEvent($event)
           .ok('si')
           .cancel('no')
           $mdDialog.show(confirm).then(function(){

             $http
               .delete('http://192.168.1.4:1338/usuario/' + lista[$index].id)
               .then(function(response){

                  console.log(response)
                 //lista = response.data;
                 console.log("eliminar",$index)
                 lista.splice($index, 1)

               })
             ;

           })
           console.log("eliminar",$index)
        }


        //duplicar Amigos
        function duplicarAmigos($index){
          var obj = angular.copy(lista[$index])
          obj.activo = false
          lista.push(obj)
        }

        //activar seleciinas usuarios
        function toggleUsuario ($index){
          console.log($index)
          var obj_ = lista[$index]
          //var obj_ = obj.fullList[$index];
          obj_.activo = !obj_.activo
          console.log(obj_)

        }
        //duplicar selecionadas
        function duplicarVarios (){
          console.log(lista.length)
          for(var i=0; i < lista.length; i++ ){
            console.log(lista[i]);
            if (lista[i].activo) {
              duplicarAmigos(i)

            }
          }
        }
        //eliminar selecionadas
        function eliminarVarios(){

          console.log(lista.length)
          for(var i=0; i < lista.length; i++ ){
            console.log(lista[i]);
            if (lista[i].activo) {
               lista.splice(i, 1)
              i--;

            }
          }
        }

        function filterAmigos(item, idx, list){
        //  console.log("Filter Buscar",item)
          var filter = false;
          // console.log(item, idx, list, $rootScope.buscarMain);
          // console.log(this.txt);
          if(
            item.email.indexOf(this.txt) > -1 ||
            item.username.indexOf(this.txt) > -1 ||
            item.nombre.indexOf(this.txt) > -1
          ){
            filter = true;
          }
          return filter;
        }

      }

})();
