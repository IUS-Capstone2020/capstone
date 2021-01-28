const mongoose = require('mongoose');

const MaskSchema = mongoose.Schema({
  section: {
    type: String,
    required: true,
    unique: true
  },
  name: String,
  price: String,
  size: String,
  description: String
});


MaskSchema.query.bySection = function(name) {
  return this.where({date: name});
}

const Mask = mongoose.model('Mask', MaskSchema);
module.exports = Mask;
