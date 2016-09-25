//Declaramos el nombre del controlador
var myApp = angular.module('myApp', []);

//Declaramos el metodo controller de myApp
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

    var refresh = function(){
    	//Pedimos el arreglo de objetos contactlist almacenado en el back-end
    	$http.get('/contactlist').success(function(respuesta){
	    	console.log("I got the data I requested");
	    	//Obtiene los datos del form
	    	$scope.contactlist = respuesta;
	    	//Limpia el input
	    	$scope.contact = "";
    	});
    };

    //Refrescamos la pagina luego de obtener datos
    refresh();

    //Declaramos la funcion del boton Add Contact
    $scope.addContact = function(){
    	console.log($scope.contact);
    	//Hacemos un post a contactlist y refrescamos
    	$http.post('/contactlist', $scope.contact).success(function(respuesta){
    		console.log(respuesta);
    		refresh();
    	});
    };

}]);﻿


