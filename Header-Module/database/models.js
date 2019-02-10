const mongoose = require('mongoose');
const connection = require('./index');

const eventSchema = mongoose.Schema({
	experienceType: String,
	hostName: String,
	hostDescription: String,
	hostImage: String,
	eventName: String,
	eventDescription: String,
	eventLocation: String,
	eventDuration: String,
	eventProvidedItems: String,
	eventNotes: String,
	eventLanguage: String,
	eventViews: Number
})

const Event = mongoose.model('Event', eventSchema);

module.exports = { Event };