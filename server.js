var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/', function(request, response){
	response.send('Hello');
});

app.listen(3000, '192.168.0.22', function(){
	console.log('Server running on port 3000');
})