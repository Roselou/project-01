var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/project-01');

var Artist = require('./artist');

var Schema = mongoose.Schema;

var ExhibitionSchema = new Schema ({
	title: String, 
	artist1: [Artist.schema],
	artist2: [Artist.schema],
	artist3: [Artist.schema],
	location: String, 
	statement: String

});

var Exhibition = mongoose.model('Exhibition', ExhibitionSchema);

module.exports = Exhibition;
module.exports.Artist = require('./artist');
