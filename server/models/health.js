var mongoose = require ('mongoose');

var Record = mongoose.model('Record', {
  text: {
    type: String,
    minlength: 1,
    trim: true
  },
  completedAt: {
    type: Number,
    default: null
  }
});

var otherRecord = new Record({
  text: 'Checked Temp',
  completedAt: 123
});

module.exports = {Health}