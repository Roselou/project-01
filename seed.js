var db = require('./models');

//hard-coded data for fav artists 


//HARD-CODED DATABASE INFO (15 total)

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


db.Artist.remove({}, function(err, artists){
	db.Artist.create(artistsList, function(err, artists){
		if (err){
			return console.log('ERROROROROROROR', err);
		}
		console.log('all artists', artists);
		console.log('created ', artists.length, 'artists');
		process.exit();
	});
});