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
      .controller('FormAmigosCtrl',[
        '$rootScope',
        '$http',
        'Amigos',
        formamigosCtrl
      ]);

      function formamigosCtrl ($rootScope, $http, Amigos) {
        console.log('amigos')
        var
          vm = this
        ;
        // $http
        //   .get('http://192.168.1.4:1338/usuario')
        //   .then(function(response){
        //     console.log(response.headers())
        //     console.log(response.data[0])
        //     console.log(response)
        //   })
        // ;
            //vm.amigos = Amigos.list();
            //vm.amigos = Amigos.getFullList;
            //vm.amigos = Amigos.fullList;
            vm.amigos = Amigos;

            Amigos.list();
            //vm.amigos = [];

            vm.remo = Amigos.remove;

            vm.duple = Amigos.duplicar;

            vm.toggleUsuario = Amigos.toggle;

            var fav = {
              email: 'sergio@gmail.com',
              password: '123',
              username: 'sergio123456',
              confirmation: '123',
              // rol: 'inquilino, visitante',
              blog: '59193c747f3177d656bd7d94',
              nombre: 'sergio',
            }


            // ;
                // Amigos
                // .loadAmigos()
                // .then(function(){
                //   Amigos.add(add);
                // })

            // $rootScope.$watch(Amigos.getFullList, function (nlist){
            //   console.log(nlist)
            //   vm.amigos = nlist
            // })


      }


  })();
