var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:3000/projet-01');

var api = require('./apiController')
var artists = require('./artistsController')

module.exports = {
	api: api,
	artists: artists
}