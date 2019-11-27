const add = require("./module")

const folder = process.argv[2]
const ext = '.' + process.argv[3]

    add(folder,ext, function(err, result) {
      if(err) { // Best practice to handle your errors
          console.log(err)
      } else { // Implement the logic, what you want to do once you recieve the response back 
        console.log(result) 
      }
    })

