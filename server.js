var express = require('express');
var app = express();
 
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/app'));
 
app.get('/', function(request, response) {
   response.sendfile('geolocation.html');
});
 
app.get('/move', function(req,res){
      res.sendfile('odometer.html');
});  
 
app.listen(app.get('port'), function() {
   console.log("Node app is running at localhost:" + app.get('port'));
});
