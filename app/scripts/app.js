(function(){
  'use strict';
  /**
   * @ngdoc overview
   * @name practicaApp
   * @description
   * # practicaApp
   *
   * Main module of the application.
   */

   angular
     .module('practicaApp', [
       'ngAnimate',
       'ngAria',
       'ngCookies',
       'ngMessages',
       'ngResource',
       'ngRoute',
       'ngSanitize',
       'ui.router',
       'ngMaterial'
     ])
     .config([
       '$stateProvider',
       start
     ]);

  //login principal

  function start ($stateProvider){
    $stateProvider
      .state({
        name:'Login',
        url:'',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
    //menu
      .state({
        name:'about',
        url:'/About/{token}',
        templateUrl: 'views/about.html',
        resolve: {
          getToken: [
            '$state',
            '$stateParams',
            'Amigos',
            function($state, $stateParams, Amigos)
            {
            console.log($stateParams);
            return Amigos
                    .getToken($stateParams.token)
                    .then(function(success){
                    if (success.data.err){
                        $state.go('error');
                      }
                    });
          }]
        },
        controller: 'AboutCtrl',
        controllerAs: 'about',
    })

    //lista de contactos

      .state({
        name: 'about.dashboard',
        url:'/dashboard',
        templateUrl: 'views/dashboard.html',
        controller:'DashboarCtrl',
        controllerAs:'dashboard',

      })

      //lista de amigos
      .state({
        name:'about.main',
        url:'/Main',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })

      //lista de mensages
      .state({
        name:'about.mesaje',
        url:'/mesaje',
        templateUrl: 'views/mesaje.html',
        controller: 'MesajeCtrl',
        controllerAs: 'mesaje'
      })


      // listas de lates

      .state({
        name:'about.dashboard.formLates',
        url:'/formLates',
        views:{
          aboutdashboardformLates:{
            templateUrl:'views/forms/lates.html',
            controller: 'FormLatesCtrl',
            controllerAs: 'formLates'
          }
        }
      })

      //
      // listas de favorites

      .state({
        name:'about.dashboard.formFavorites',
        url:'/formFavorites',
        views:{
          aboutdashboardformFavorites:{
            templateUrl:'views/forms/favoritos.html',
            controller: 'FormFavoritosCtrl',
            controllerAs: 'formFavorites',
          }
        }
      })

        // listas de amigos

        .state({
          name:'about.main.formAmigos',
          url:'/formamigos',
          views:{
            aboutmainformAmigos:{
              templateUrl:'views/forms/amigos.html',
              controller: 'FormAmigosCtrl',
              controllerAs: 'formAmigos'
            }
          }
        })

        // listas de mejores amigos

        .state({
          name:'about.main.formMejoresAmigos',
          url:'/formMejoresAmigos',
          views:{
            aboutmainformMejoreAmigos:{
              templateUrl:'views/forms/mejoresAmigos.html',
              controller: 'FormMejoresAmigosCtrl',
              controllerAs: 'formMejoresAmigos'
            }
          }
        })

        // listas de mensages

        .state({
          name:'about.mesaje.formNuevosMensages',
          url:'/formNuevosMensages',
          views:{
            aboutmesajeformNuevosMensages:{
              templateUrl:'views/forms/mensagesNuevos.html',
              controller: 'FormMensagesNuevosCtrl',
              controllerAs: 'formNuevosMensages'
            }
          }
        })

        // listas de mensagesRecividos

        .state({
          name:'about.mesaje.formMensagesRecividos',
          url:'/mensagesRecividos',
          views:{
            aboutmesajeformMensagesRecividos:{
              templateUrl:'views/forms/mensagesRecividos.html',
              controller: 'FormMensagesRecividosCtrl',
              controllerAs: 'formMensagesRecividos'
            }
          }
        })


      }

})();
