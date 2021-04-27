var express     = require('express');
var bodyParser  = require('body-parser');
var apiRouter   = require('./apiRouter').router;
// Instantiate server
var server = express();

// Body Parser configuration
server.use(express.json());

server.use(express.json());

// Configure routes
server.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('<h1>Bonjour sur mon super server</h1>');
});


server.use('/api/', apiRouter);
// Launch server
server.listen(8080, function() {
    console.log('Server en écoute :)');
});

/**$2a$04$cOzSh6dAlEju9AIE2Xu0wepC8t9p1jg2Mf5V0BLONgMT1NXUuG2Wq */