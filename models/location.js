var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/project-01');
var Schema = mongoose.Schema

var LocationSchema = new Schema ({
	location : String,
});

var Location = mongoose.model('Location', LocationSchema);
module.exports = Location;