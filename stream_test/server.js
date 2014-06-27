var fs = require('fs');
var stream = fs.createReadStream('./1661.txt');
stream.on('data', function(chunk) {
    console.log(chunk.toString());
});
stream.on('end', function() {
    console.log('finished');
});