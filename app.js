var express = require('express');
var load = require('express-load');
var app = express();
var path = require('path');

load('models')
  .then('controllers')
  .then('routes')
  .into(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('port', (process.env.PORT || 3000))

app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), function(){
  console.log("Server's running localy on port 5000.");
});
