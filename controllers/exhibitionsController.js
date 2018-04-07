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


function show(req, res){
	db.Exhbition.findById(req.params.exhibition_id, function(err, foundExh){
		res.json(foundExh);
	});
};

// function destroy(req, res){

// }

function update(exhibitions, exhIdToUpdate, updatedExhibitions){
	 // var idToFind = req.params.id;
  //    exhibitions.forEach(function(foundExhibition){
  //     if (eachExh._id === exhIdToUpdate){
  //      foundExhibition.title = req.body.title
  //      foundExhibition.artists = req.body.artists
  //      foundExhibition.location = req.body.location
  //      foundExhibition.statement = req.body.statement
  //     } 
  //     return foundExhibition
  //    });
  //    res.json(foundExhibition)

     db.Exhibition.findById(req.params.id, function(err, foundExh){
		if (err) {console.log('youre wrong')}
			foundExh.title = req.body.title;
			// foundExh.artists.name = req.body.artists.name;
			// foundExh.location = req.body.location;
			foundExh.statement = req.body.statement;

			foundExh.save(function(err, savedExh){
				if(err){ console.log('saving failed')}
					console.log(savedExh);
					res.json(savedExh);
				renderExhibition(savedExh)
			});
	});



   //UPDATE CLoster
 };


module.exports = {
	index:index,
	create: create,
	show: show,
	// destroy: destroy,
	update: update
}