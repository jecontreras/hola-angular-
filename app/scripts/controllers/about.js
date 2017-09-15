(function(){
  'use strict';

  /**
   * @ngdoc function
   * @name practicaApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the practicaApp
   */
  angular.module('practicaApp')
    .controller('AboutCtrl', [
      '$stateParams',
      '$rootScope',
      AboutCtrl
    ]);

      function AboutCtrl ($stateParams, $rootScope) {
        $rootScope.saludo = 'Hola';
          console.log($stateParams)
          $rootScope.$watch('searchtxt', function(vnew, vold){
            console.log(vnew)
          });
          var
           vm = this;

          vm.usuarios= $stateParams.username;

          var
           imagePath = 'images/yeoman.png';

          vm.listaMenu = [{
            face : imagePath,
            what: 'Dashboard',
            nameUrl: 'about.dashboard.formLates',

          }, {
            face : imagePath,
            what: 'Amigos',
            nameUrl: 'about.main.formAmigos',

          }, {
            face : imagePath,
            what: 'Messages',
            nameUrl: 'about.mesaje.formNuevosMensages',

          }];
          vm.listaMenuOp = [{

              what:'Trash'

            },
            {
              what:'Setting'
            },
            {
              what: 'Salir',
              nameUrl:''
            }
        ];
      }

})();
