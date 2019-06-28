// note.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Notes
let Note = new Schema({
	title: {
		type: String
	},
	body: {
		type: String
	}
}, {
	collection: 'notes'
});

module.exports = mongoose.model('Note', Note);