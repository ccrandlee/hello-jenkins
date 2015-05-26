var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
  res.send('hello jenkins02');
});
 
app.listen(process.env.OPENSHIFT_NODEJS_PORT || 80);
 
module.exports = app;
