//Hacemos require de express
var express = require('express');
var mongojs = require('mongojs');
var bodyParser = require('body-parser');

//Creamos una instancia de Express
var app = express();
//Definimos la DB, como primer parámetro es el nombre de la DB y el segundo es la colección
var db = mongojs('contactlist', ['contactlist']);

//Declaramos la carpeta Public donde vamos a almacenar las imágenes y scripts del front-end
app.use(express.static(__dirname + "/public"));
//Declaramos bodyParser que va a ser el encargado de parsear la solicitud para recibir solo el objeto
app.use(bodyParser.json());

//Le enviamos a la vista los documentos de la DB
app.get('/contactlist', function(solicitud, respuesta){
	console.log("I received a GET request");

	//Hacemos una busqueda en la coleccion y devolvemos un objeto JSON
	db.contactlist.find(function(error, documento){
		console.log(documento);
		respuesta.json(documento);
	})

});


//Hacemos un post desde la vista
app.post('/contactlist', function(solicitud, respuesta){
	console.log(solicitud.body);

	//Guardamos los datos que recibimos de la vista
	db.contactlist.insert(solicitud.body, function(error, documento){
		if(error){
			console.log(error);
		}else{
			//Enviamos el documento que recibimos a mongoDB
			respuesta.json(documento);
		}
	});
});

//Declaramos el servidor puerto e ip
app.listen(3000, '192.168.0.22', function(){
	console.log('Server running on port 3000');
})