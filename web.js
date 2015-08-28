/* web.js */
// Setup app and dependencies
var express = require("express");
var logfmt = require("logfmt");
var app = express();

// Use logging
app.use(logfmt.requestLogger());

// Redirect routes to /public
app.use(express.static(__dirname + '/public'));

// Render html files
app.engine('html', require('ejs').renderFile);

// Listen on port 5000
var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
	console.log("listening on " + port);
});
