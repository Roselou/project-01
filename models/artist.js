var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/project-01');
var Schema = mongoose.Schema

//SCHEMA OUTLINE
var ArtistSchema = new Schema ({
	name: String, 
	movement: String, 
	medium: String,
	//artworkTitle: String,
	//artworkYear: Number,
	//themes: String

});


var Artist = mongoose.model('Artist', ArtistSchema);
module.exports = Artist;