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

function destroy(req, res){
	db.Exhibition.findByIdAndRemove(req.params.id, function (err, foundExh){
		if(err){
			console.log(err)
		}
		res.json(foundExh)
	})

}

function update(req, res){

     db.Exhibition.findById(req.params.id, function(err, foundExh){
		if (err) {console.log('youre wrong')}
			foundExh.title = req.body.title;
			foundExh.statement = req.body.statement;

			foundExh.save(function(err, savedExh){
				if(err){ console.log('saving failed')}
					console.log(savedExh);
					res.json(savedExh);
			});
	});



   //UPDATE Coser
 };


module.exports = {
	index:index,
	create: create,
	show: show,
	destroy: destroy,
	update: update
}