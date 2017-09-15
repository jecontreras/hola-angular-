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
    .controller('MesajeCtrl',[
          '$rootScope',
          '$state',
          '$mdDialog',
          'Mensages',
          MesajeCtrl
      ]);

    function MesajeCtrl ($rootScope, $state, $mdDialog, Mensages) {
       console.log($rootScope.saludo)
         var
          vm = this;

          vm.searchtxt = Mensages.search.txt;
          //Mensages.search.txt = 'Sergio';

          $rootScope.$watch(function(){
            return vm.searchtxt;
          }, function(vnew, vold){
            Mensages.search.txt = vnew;
          });

         var
          imagePath = 'images/yeoman.png';

          vm.menuList = [{
              face : imagePath,
              what: 'nuevos mensages',
              nameUrl: 'about.mesaje.formNuevosMensages',
              nameView: 'aboutmesajeformNuevosMensages'
            }, {
              face : imagePath,
              what: 'mensages recividos',
              nameUrl: 'about.mesaje.formMensagesRecividos',
              nameView: 'aboutmesajeformMensagesRecividos'

            }
        ];

            vm.openSearch = false;
              vm.toggleToolbar = function (){
                vm.openSearch = !vm.openSearch;
          };

             vm.listaOpciones = [ {
               title: 'Agregar'
             },
             {
               title: 'Borrar'
             },
             {
               title: 'Duplicar'
             }];


       //redirecionar en el item

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
                    templateUrl: 'views/opcionMensages.html',
                    clickOutsideToClose: true
                  });
                 }
                if(item.title === "Duplicar"){
                  Mensages.duplicarVariosMensges()
                }
                if(item.title === "Borrar"){
                  Mensages.eliminarVariosMensages()
                }
            }
              vm.filtrosMensages = function(item, idx, list){
                return Mensages.search.filter(item, idx, list);
              }


    }


})();
