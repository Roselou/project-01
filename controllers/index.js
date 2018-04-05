var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:3000/projet-01');

var api = require('./apiController')
var exhibitions = require('./exhibitionsController')

module.exports = {
	api: api,
	exhibitions: exhibitions
}