var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/project-01');

var ArtistModel = require('./artist');
var ExhibitionModel = require('./exhibition');

module.exports = {
	Artist: ArtistModel,
	Exhibition: ExhibitionModel
}