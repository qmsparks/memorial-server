const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const guestSchema = new Schema({
  firstName: {
    type: String,
    required: true 
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },
  partySize: {
    type: Number,
    required: true
  },
  isAttendingService: {
    type: Boolean,
    default: false
  },
  isAttendingMeal: {
    type: Boolean,
    default: false
  }
})

const Guest = mongoose.model('Guest', guestSchema);

module.exports = Guest;