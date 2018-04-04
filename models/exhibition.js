var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/project-01');

var Artist = require('./artist');
var Location = require('./location');

var Schema = mongoose.Schema;

var ExhibitionSchema = new Schema ({
	title: String, 
	artists: [Artist.schema],
	location: [Location.schema], 
	statement: String
});

var Exhibition = mongoose.model('Exhibition', ExhibitionSchema);

module.exports = Exhibition;
module.exports.Artist = require('./artist');
