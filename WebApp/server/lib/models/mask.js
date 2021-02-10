const mongoose = require('mongoose');

const MaskSchema = mongoose.Schema({
/*  section: {
    type: String,
    required: true,
    unique: true
  },*/
  id: String,
  name: String,
  price: String,
  img: String,
  description: String,
  fit: String
});


MaskSchema.query.bySection = function(name) {
  return this.where({name: name});
}

const Mask = mongoose.model('Mask', MaskSchema);
module.exports = Mask;
