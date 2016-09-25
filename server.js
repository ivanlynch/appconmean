var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function(req, res){
	console.log("I received a GET request");

	person1 = {
		name: "Ivan",
		email: "ivan@ivanlynch.com",
		number: "(111) 111-1111"
	};

	person2 = {
		name: "Ivan",
		email: "ivan@ivanlynch.com",
		number: "(111) 111-1111"
	};

	person3 = {
		name: "Ivan",
		email: "ivan@ivanlynch.com",
		number: "(111) 111-1111"
	};

	var contactlist = [person1, person2, person3];
	res.json(contactlist);
});

app.listen(3000, '192.168.0.22', function(){
	console.log('Server running on port 3000');
})