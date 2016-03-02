var express = require('express');
var path = require('path');

var app = express();

app.get('/views/:viewName', function(req, res) {
    res.sendFile(
        path.resolve(
            __dirname + '/../views/' + req.params.viewName
        )
    );
});

app.use(express.static(__dirname + '/../../dist'));

// Catch-all for non-matching URLs
// Enables refresh on client-side (URLs would
// otherwise be sent to the server)
app.use(function(req, res) {
	res.sendFile(
        path.resolve(
            __dirname + '/../index.html'
        )
    );
});

app.listen(3000);
