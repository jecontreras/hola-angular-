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
           .controller('MainCtrl', [
           '$rootScope',
           '$state',
           '$mdDialog',
           'Amigos',
            MainCtrl
      ]);

      function MainCtrl ($rootScope, $state, $mdDialog, Amigos){

       console.log($rootScope.saludo)

           var
            vm = this;
              vm.searchtxt = Amigos.search.txt;
              // Amigos.search.txt = 'Sergio';

              $rootScope.$watch(function(){
                return vm.searchtxt;
              }, function(vnew, vold){
                Amigos.search.txt = vnew;
              });

            var
             imagePath = 'images/yeoman.png';

            vm.menuList = [{
              face : imagePath,
              what: 'Amigos',
              nameUrl: 'about.main.formAmigos',
              nameView: 'aboutmainformAmigos'

            }, {
              face : imagePath,
              what: 'Mejores Amigos',
              nameUrl: 'about.main.formMejoresAmigos',
              nameView:'aboutmainformMejoreAmigos'

            }
            ];

              vm.openSearch = false;
                vm.toggleToolbar = function (){
                  vm.openSearch = !vm.openSearch;
              };

              vm.listaOpciones = [{
                  title: 'Agregar'
                },
                {
                  title: 'Borrar'
                },
                {
                  title: 'Duplicar'
                }
              ];

               vm.go=function (nameUrl) {
                var
                 vm = this;
                $state.go(nameUrl)

            }



                vm.openDialog = function(item, ev){

                  if (item.title === "Agregar") {

                    $mdDialog.show({
                      controllerAs: 'opcion',
                      controller: 'OpcioneCtrl',
                      targetEvent: ev,
                      templateUrl: 'views/opcion.html',
                      clickOutsideToClose: true
                    });
                  }
                  if (item.title === "Duplicar"){
                      Amigos.duplicarVarios()
                  }
                  if (item.title === "Borrar") {
                      Amigos.eliminarVarios()
                  }
            }

            vm.filtrosAmigos = function(item, idx, list){
              //console.log(item, idx, list)
              return Amigos.search.filter(item, idx, list);
            }
        }


})();
