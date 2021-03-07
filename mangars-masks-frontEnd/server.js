var express = require('express');

var app = express();

app.use(express.static(__dirname + '/mangars-masks-frontEnd'));
app.get('/assets', function(req,res){
  res.sendFile(__dirname + '/mangars-masks-frontEnd/assets');
} );
app.get('/*', function (req, res){
  res.sendFile(__dirname + '/mangars-masks-front-end');
} );

var port = process.env.PORT || 8080;
app.listen(port, function(){
  console.log('server running on port ' + port + '.');

})
