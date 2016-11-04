#!/usr/bin/env node
var debug = require('debug')('project');
var app = require('../app');

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
}); 