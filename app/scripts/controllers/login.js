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
    .controller('LoginCtrl',[
      '$state',
      'Amigos',
      '$stateParams',
      '$http',
      '$rootScope',
      LoginCtrl
    ]);

      function LoginCtrl ($state, Amigos, $stateParams, $http, $rootScope) {
        var
          vm = this;

          vm.user = "",
          vm.pass = ""

            vm.longin = function(){

              var auto = {
                email: vm.user,
                password: vm.pass
              }

              Amigos
              .login(auto)
              .then(function(rta){
                $rootScope.miToken = rta.data.token;
                console.log(rta.data.token)
                if (rta.data.token) {
                  $state.go("about",{
                    token: rta.data.token

                  });
                }else{

                  vm.error = "error de usuario"
                }
              })
              ;
            }
            vm.logout = function(){
              delete $rootScope.user;
              $state.go('main');
              $timeout(function(){
                location.reload()
              }, 500)
            };



      }


})();
