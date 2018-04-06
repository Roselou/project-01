var db = require('../models');

//GET /api/artists
function index (req, res){
	console.log('shabado')
	db.Exhibition.find({}, function(err, allArtists){
		if (err){
			console.log('EROOOOOR', err)
		}
		console.log(111111, allArtists)
		res.json(allArtists)
	})
}

function create(req, res){
	
	db.Artist.findOne({name: req.body.artist1}, function(err, firstArtist){
		db.Artist.findOne({name: req.body.artist2}, function(err, secondArtist){
			db.Artist.findOne({name: req.body.artist3}, function(err, thirdArtist){
				console.log(firstArtist, secondArtist, thirdArtist);

				var newExh = {
					title: req.body.title,
					artists: [firstArtist, secondArtist, thirdArtist],
					location: {location: req.body.location},
					statement: req.body.statement
				}
				db.Exhibition.create(newExh, function(err, createdExhibition){
					if (err){
						console.log('ERRERERER', err);
					} 
					console.log(createdExhibition);
					res.json(createdExhibition);
				})
			})	

		}) 
	})
}


// function show(req, res){

// }

// function destroy(req, res){

// }

// function update(req, res){

// }

module.exports = {
	index:index,
	create: create,
	// show: show,
	// destroy: destroy,
	// update: update
}