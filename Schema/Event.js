const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({}, { strict: false });
const Event = mongoose.model('Event', EventSchema, 'Event');

module.exports =  Event