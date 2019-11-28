'use strict'
    const fs = require('fs')
    const path = require('path')


module.exports = function(folder, ext, callback){
  var arr = []
    fs.readdir(folder, function (err, files) {
        if (err) return callback(err, null)
        files.forEach(function (file) {
          if (path.extname(file) === '.'+ext) {
            arr.push(file);
          }
        })
        return callback(null, arr);
    })
  }

  /*
    OFFICIAL SOLUTION
    
    'use strict'
    const fs = require('fs')
    const path = require('path')
    
    module.exports = function (dir, filterStr, callback) {
      fs.readdir(dir, function (err, list) {
        if (err) {
          return callback(err)
        }
    
        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })
    
        callback(null, list)
      })
    }

  */