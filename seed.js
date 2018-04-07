var db = require('./models');

//hard-coded data for exh

//var location = ['The Hammer', 'SF MOMA', 'The Broad']

// HARD-CODED DATABASE INFO (15 total)

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


var sampleExhibition = [
	{
		title: 'Art in the Age of the Internet',
		artists: [artistsList[0], artistsList[3], artistsList[4]],
		location: {location: 'The hammer'},
		statement: 'Art in the Age of the Internet, 1989 to Today examines how the internet has radically changed the field of art, especially in its production, distribution, and reception. The exhibition comprises a broad range of works across a variety of mediums—including painting, performance, photography, sculpture, video, and web-based projects—that all investigate the extensive effects of the internet on artistic practice and contemporary culture. Themes explored in the exhibition include emergent ideas of the body and notions of human enhancement; the internet as a site of both surveillance and resistance; the circulation and control of images and information; possibilities for new subjectivities, communities, and virtual worlds; and new economies of visibility initiated by social media.'
	},
	{
		title: 'Future Conscious',
		artists: [artistsList[13], artistsList[1], artistsList[5]],
		location: {location: 'SF MOMA'},
		statement: 'Creating a safe space, real or imaginary that explicitly relates the relationship between time and space of that reflects upon our current political situation without being overly involved in the duress we currently face'
	}
];


db.Exhibition.remove({}, function(err, exhibitions){
	db.Exhibition.create(sampleExhibition, function(err, exhibitions){
		if(err){
			return console.log('ERROROROROROROR', err);
		}
		console.log('all exhibitions', exhibitions);
		console.log('created ', exhibitions.length, ' exhibitions');
		process.exit();
	})
})