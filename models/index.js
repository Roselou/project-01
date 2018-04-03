var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/project-01');

var ArtistModel = require('./artist');

module.exports = {
	Artist: ArtistModel
}