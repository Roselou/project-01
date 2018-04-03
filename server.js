var express = require('express');
	app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', function(req, res){
	res.sendFile('views/index.html', { root: __dirname });
});









// LISTENER
app.listen(3000, function(){
	console.log('listening on 3000');
});