var express = require('express');
var path 	= require('path');
var app     = express();

app.use('/js', express.static(path.join(__dirname, 'app/public/javascripts')));
app.use('/pages', express.static(path.join(__dirname, 'app/public/pages')));

app.get('*', function(req, res) {
	return res.sendfile('app/public/pages/index.html');
});

app.listen(8000);

console.log("App listening on port 8000");