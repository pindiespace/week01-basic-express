var express = require('express'); // load the express object

var app = express(); // execute the express object

// Tell express to serve static files from the output directory
app.use(express.static('output'));

// Dynamic page generation - Special greeting!
app.get( '/greeting', function ( req, res ) {

    res.send('hi there, your lucky number is:' + Math.random());

});

app.listen(3000);