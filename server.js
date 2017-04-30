var express = require('express');
var app = express();
// var bodyParser = require('body-parser');

app.use(express.static('./'));
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.listen(process.env.PORT || 5000, function() {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

// var server = app.listen(8081, function () {
//    var host = server.address().address
//    var port = server.address().port
   
//    console.log("Example app listening at http://%s:%s", host, port)

// })
