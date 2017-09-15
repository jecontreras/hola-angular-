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
    .controller('DashboarCtrl', [
      '$rootScope',
      '$state',
      '$mdDialog',
      'Lates',
      DashboarCtrl
    ]);
      function DashboarCtrl ($rootScope, $state, $mdDialog, Lates) {
        console.log($rootScope.saludo)
        var
         vm = this;

         vm.searchtxt = Lates.search.txt;
         // Lates.search.txt = 'Sergio';

         $rootScope.$watch(function(){
           return vm.searchtxt;
         }, function(vnew, vold){
           Lates.search.txt = vnew;
         });


        var imagePath = 'images/yeoman.png';

        vm.menuList = [{
          face : imagePath,
          what: 'Latest',
          nameUrl: 'about.dashboard.formLates',
          nameView: 'aboutdashboardformLates'
        }, {
          face : imagePath,
          what: 'Favorites',
          nameUrl: 'about.dashboard.formFavorites',
          nameView: 'aboutdashboardformFavorites'

        }
        ];

        vm.openSearch = false;
        vm.toggleToolbar = function (){
          vm.openSearch = !vm.openSearch;
        };

        vm.listaOpciones = [{
            title: 'Agregar',
            templateUrl:'views/opcionLates.html'
          },
          {
            title: 'Borrar'
          },
          {
            title: 'Duplicar'
          }
        ];

        vm.go = function (nameUrl) {
          $state.go(nameUrl)

        }
        vm.openDialog = function (item, ev){
          console.log(item);

          if (item.title === "Agregar") {

            $mdDialog.show({
              controllerAs: 'opcion',
              controller: 'OpcioneCtrl',
              targetEvent: ev,
              clickOutsideToClose: true,
              templateUrl:'views/opcionLates.html'
            });
          }
          if (item.title === "Borrar"){
             Lates.eliminarVarios()
          }

          if(item.title === "Duplicar"){
             Lates.duplicarVarios()
          }

        }

        //filtro de buscar

        vm.filtrosLates = function(item, idx, list){
          //console.log(item, idx, list)
          return Lates.search.filter(item, idx, list);
        }
    }

})();
