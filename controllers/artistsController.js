var db = require('../models');

//GET /api/artists
function index (req, res){
	db.Artist.find({}, function(err, allArtists){
		res.json(allArtists)
	})
}