const fs = require('fs');

fileContentBuffer = fs.readFileSync(process.argv[2]);
fileContentArray = fileContentBuffer.toString().split('');
var count = 0;

for(var i = 0; i < fileContentArray.length; i++){
    if(fileContentArray[i]=='\n'){
        count+=1;
    }
}
console.log(count);