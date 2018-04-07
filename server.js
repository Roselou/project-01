var express = require('express');
	app = express();
	bodyParser = require('body-parser');
	db = require('./models');
	controllers = require('./controllers')


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', function(req, res){
	res.sendFile('views/index.html', { root: __dirname });
});


app.get('/api', controllers.api.index);

app.get('/api/artists', function(req, res){
   var artistsList = [
{
	name: 'Hito Steyerl',
	movement: 'Contemporary',
	medium: 'Film and Writing'
}, 
{
	name: 'Alina Szapocznicow', 
	movement: 'Surrealism',
	medium: 'Sculpture'
},
{
	name: 'Yoko Ono',
	movement: 'Fluxus',
	medium: 'Performance Art and Film'
},
{
	name: 'Shigeko Kubota', 
	movement: 'Fluxus',
	medium: 'Video Art and Sculpture Video'
}, 
{
	name: 'Pipilotti Rist', 
	movement: 'Contemporary',
	medium: 'Video Installation'
}, 
{
	name: 'Alicja Kwade', 
	movement: 'Contemporary',
	medium: 'Sculpture'
}, 
{
	name: 'Maya Deren', 
	movement: 'Surrealism',
	medium: 'Experimental Film'
}, 
{
	name: 'Monir Shahroudy', 
	movement: 'Geometric Minimalism and Saqqakhaneh',
	medium: 'Multimedia (drawings, mirrored mosaics)'
}, 
{
	name: 'Lygia Clarke',
	movement: 'Brazilian Constructivism',
	medium: 'Installation, Painting, Wearable Sculptures'
},
{
	name: 'Charlotte Moorman',
	movement: 'Fluxus',
	medium: 'Performance Art'
}, 
{
	name: 'Eva Hesse',
	movement: 'Minimalism',
	medium: 'Sculpture'
},
{
	name: 'Kara Walker',
	movement: 'Contemporary',
	medium: 'Multimedia (Painting, Installation, filmmaker'
},
{
	name: 'Mierle Laderman Ukeles',
	movement: 'Feminist Art',
	medium: 'Performance Art'
}, 
{
	name: 'Sophie Calle',
	movement: 'Contemporary Art',
	medium: 'Photography'
}, 
{
	name: 'Louise Bourgeois',
	movement: 'Surrealism',
	medium: 'Sculpture and Installation Art'
}
];

	res.json(artistsList);
})

app.get('/api/exhibitions', controllers.exhibitions.index);
// app.get('/api/exhibitions', function(req, res){
// 	res.send(json);
// });

app.post('/api/exhibitions', controllers.exhibitions.create);

app.put('/api/exhibitions/:id', controllers.exhibitions.update);

app.delete('/api/exhibitions/:id', controllers.exhibitions.destroy);



// LISTENER
app.listen(process.env.PORT || 3000, function(){
	console.log('listening on 3000');
});