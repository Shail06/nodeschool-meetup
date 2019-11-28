const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], function callback(err, list){
    for(var i = 0; i < list.length; i++){
        var extension = path.extname(list[i]);
        if(extension == ('.'+process.argv[3])){
            console.log(list[i]);
        }
    }
});

/* OFFICIAL SOLUTION
 'use strict'
    const fs = require('fs')
    const path = require('path')
    
    const folder = process.argv[2]
    const ext = '.' + process.argv[3]
    
    fs.readdir(folder, function (err, files) {
      if (err) return console.error(err)
      files.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
    }) 
 */