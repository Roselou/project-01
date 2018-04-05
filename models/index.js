var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost/project-01');

var ExhibitionModel = require('./exhibition');
var ArtistModel = require('./artist');
var LocationModel = require('./location');

module.exports = {
	Artist: ArtistModel,
	Exhibition: ExhibitionModel,
	Location: LocationModel
}