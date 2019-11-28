const http = require('http');

http.get(process.argv[2], function callback(response){
    response.pipe()
});