var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    if (req.url === '/') {
        res.writeHead(200, {'Content-type': 'text/plain'});
        fs.createReadStream('./1661.txt').pipe(res);
    }
}).listen(3000);
console.log('Server running at http://localhost:3000');