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
	db.Exhibition.create(req.body, function(err, exhibition){
		if (err){
			console.log('ERRERERER', err);
		} 
		res.json(exhibition)
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