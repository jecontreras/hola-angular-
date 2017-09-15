(function(){
  'use strict';

  /**
   * @ngdoc function
   * @name practicaApp.controller:OpcioneCtrl
   * @description
   * # OpcioneCtrl
   * Controller of the OpcioneCtrl
   */
  angular.module('practicaApp')
    .controller('OpcioneCtrl', [
      'Amigos',
      'Lates',
      'Mensages',
      OpcioneCtrl
    ]);
      function OpcioneCtrl (Amigos, Lates, Mensages) {
        console.log("Opcion")
        var
         vm = this;

           vm.email= "";
           vm.password = "";
           vm.username = "";
           vm.confirmation = "";
          //  vm.rol = "";
           vm.blog = "";
           vm.nombre = "";

           vm.agregar = agregar;
           vm.agregarLates = agregarLates;
           vm.agregarMensages = agregarMensages;

         function agregar(){

            var dato =({
            //  face : 'images/yeoman.png',
             email: vm.email,
             password: vm.password,
             username: vm.username,
             confirmation: vm.confirmation,
            //rol: vm.rol,
             blog: vm.blog,
             nombre: vm.nombre
           })

           Amigos
           .loadAmigos()
           .then(function(){
             Amigos.add(dato)
           })

         }
         function agregarLates(){
          Lates.add({
            face : 'images/yeoman.png',
            what: vm.user,
            who: vm.apellido,
            when: '3:08PM',
            favorito: true,
            notes: " I'll be in your neighborhood doing errands"
          })
         }
         function agregarMensages(){

           var dato =({
            //  face : 'images/yeoman.png',
             usuario: vm.user,
             asunto: vm.apellido,
             blog: '3:08PM',
             mensages: true,
             destino: " I'll be in your neighborhood doing errands",
             tipo: "",
             estado: "",
             comentario: ""
           })
           Mensages.add
         }


    }

})();
