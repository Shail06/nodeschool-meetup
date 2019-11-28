const mymodule = require("./mymodule")

const folder = process.argv[2]
const ext = process.argv[3]

mymodule(folder, ext, function(err, arr) {
      if(err) { // Best practice to handle your errors
          console.log(err)
      } else { // Implement the logic, what you want to do once you recieve the response back 
        for (var i = 0; i < arr.length; i++) {
          console.log(arr[i]);
        }
      }
    })

/*
  OFFICIAL SOLUTION
  
    'use strict'
    const filterFn = require('./solution_filter.js')
    const dir = process.argv[2]
    const filterStr = process.argv[3]
    
    filterFn(dir, filterStr, function (err, list) {
      if (err) {
        return console.error('There was an error:', err)
      }
    
      list.forEach(function (file) {
        console.log(file)
      })
    })
*/