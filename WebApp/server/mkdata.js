const mongoose = require('mongoose');

const Mask = require('./lib/models/mask');

const Bw = new Mask({
  section:'Bw',
  name: "Black and white",
  price: "10",
  size: "Adult",
  description: "black and white mask"
});

const Wh = new Mask({
  section:'Wh',
  name: "White",
  price: "10",
  size: "Adult",
  description: "white mask"
});
const Gr = new Mask({
  section:'Gr',
  name: "Gray",
  price: "10",
  size: "Kids",
  description: "Gray mask"
});
const Rd = new Mask({
  section:'Rd',
  name: "Red",
  price: "10",
  size: "Adult",
  description: "Red mask"

});

mongoose.connect('mongodb://localhost:27017/ProjectWebApp', {useNewUrlParser: true, useUnifiedTopology: true});

Bw.save().catch(err => console.error(err)).then(() => { console.log('saved bw') });
Wh.save().catch(err => console.error(err)).then(() => { console.log('saved wh') });
Gr.save().catch(err => console.error(err)).then(() => { console.log('saved gr') });
Rd.save().catch(err => console.error(err)).then(() => { console.log('saved rd') });

