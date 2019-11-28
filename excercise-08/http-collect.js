const http = require('http');

const bl = require('bl');
http.get(process.argv[2], function callback(response){
    response.pipe(bl(function(error, data){
        console.log(data.length);
        console.log(data.toString());
    }));
});

/*
OFFICIAL SOLUTION

    'use strict'
    const http = require('http')
    const bl = require('bl')
    
    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err) {
          return console.error(err)
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
    })

*/