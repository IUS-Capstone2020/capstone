const mongoose = require('mongoose');
const Mask = require('./lib/models/mask');

const M10 = new Mask({
  id: '10',
  name: 'Funky Feathers',
  price : '$19.99',
  description:"Feathery Look on the Outside / Royal Blue Inside",
  fit: "Adult"
});
const M9 = new Mask({
  id: '9',
  name: 'Black Stripes',
  price : '$19.99',
  description:"Black and White Stripped Outside / White Inside",
  fit: "Adult"
});
const M8 = new Mask({
  id: '8',
  name: 'Anchors',
  price : '$19.99',
  description:"Yellow and White Anchor Outside / Red Inside",
  fit: "Adult"
});
const M7 = new Mask({
  id: '7',
  name: 'Cars',
  price : '$19.99',
  description:"Cars Themed Outside / Cars Themed Inside",
  fit: "Kids"
});
const M6 = new Mask({
  id: '6',
  name: 'Red Plaid',
  price : '$19.99',
  description:"Red Plaid Outside / White Inside",
  fit: "Adult"
});
const M5 = new Mask({
  id: '5',
  name: 'Lightning McQueen',
  price : '$19.99',
  description:"Lightning McQueen Outside / Green Plaid Inside",
  fit: "Kids"
});
const M4 = new Mask({
  id: '4',
  name: 'Diamonds',
  price : '$19.99',
  description:"Green and Blue Diamond Outside / Purple Inside",
  fit: "Adult"
});
const M3 = new Mask({
  id: '3',
  name: 'RB Plaid',
  price : '$19.99',
  description:"Red and Black Plaid Outside / White Inside",
  fit: "Adult"
});
const M2 = new Mask({
  id: '2',
  name: 'Buffalo Plaid',
  price : '$19.99',
  description:"Buffalo Plaid outside / White Inside",
  fit: "Adult"
});
const M1 = new Mask({
  id: '1',
  name: 'Flowers',
  price : '$19.99',
  description:"Black and White Flower Outside / Cactus Inside",
  fit: "Adult"
});

mongoose.connect('mongodb://localhost:27017/ProjectWebApp', {useNewUrlParser: true, useUnifiedTopology: true});

M1.save().catch(err => console.error(err)).then(() => {
  console.log('saved M1')
});
M2.save().catch(err => console.error(err)).then(() => {
  console.log('saved M2')
});
M3.save().catch(err => console.error(err)).then(() => {
  console.log('saved M3')
});
M4.save().catch(err => console.error(err)).then(() => {
  console.log('saved M4')
});
M5.save().catch(err => console.error(err)).then(() => {
  console.log('saved M5')
});
M6.save().catch(err => console.error(err)).then(() => {
  console.log('saved M6')
});
M7.save().catch(err => console.error(err)).then(() => {
  console.log('saved M7')
});
M8.save().catch(err => console.error(err)).then(() => {
  console.log('saved M8')
});
M9.save().catch(err => console.error(err)).then(() => {
  console.log('saved M9')
});
M10.save().catch(err => console.error(err)).then(() => {
  console.log('saved M10')
});
