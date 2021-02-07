const mongoose = require('mongoose');
const Mask = require('./lib/models/mask');

const M10 = new Mask({
  id: '10',
  name: 'Mask10',
  price : '$19.99'
});
const M9 = new Mask({
  id: '9',
  name: 'Mask9',
  price : '$19.99'
});
const M8 = new Mask({
  id: '8',
  name: 'Mask8',
  price : '$19.99'
});
const M7 = new Mask({
  id: '7',
  name: 'Mask7',
  price : '$19.99'
});
const M6 = new Mask({
  id: '6',
  name: 'Mask6',
  price : '$19.99'
});
const M5 = new Mask({
  id: '5',
  name: 'Mask5',
  price : '$19.99'
});
const M4 = new Mask({
  id: '4',
  name: 'Mask4',
  price : '$19.99'
});
const M3 = new Mask({
  id: '3',
  name: 'Mask3',
  price : '$19.99'
});
const M2 = new Mask({
  id: '2',
  name: 'Mask2',
  price : '$19.99'
});
const M1 = new Mask({
  id: '1',
  name: 'Mask1',
  price : '$19.99'
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
