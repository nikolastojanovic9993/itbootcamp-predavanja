// Path module
// const path = require('path');

// var pathObj = path.parse(__filename);
// console.log(pathObj);

// // Operating system module
// const os = require('os');
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();


// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);

// // File System module
// const fs = require('fs');
// // //Sinhroni metod
// // const files = fs.readdirSync('./'); 
// // console.log(files);

// //Asinhroni metod
// fs.readdir('$', function(err, files) {
//     if (err) console.log('Error', err);
//     else console.log('Result', files);
// });


//Event module
// const EventEmitter = require('events');




// const Logger = require('./logger');
// const logger = new Logger();
// //REgister a listener
// logger.on('messageLogged',  (arg) => {
//     console.log('Listener called', arg);
// });

// logger.log('message');



//HTTP module
const http = require('http');
const server = http.createServer(function (req, res) {
    if (req.url === '/') {
        res.write('Hello world');
        res.end();
    }

    if(req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});



server.listen(3000);

console.log('Listening on port 3000...');

