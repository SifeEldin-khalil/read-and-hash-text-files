
// asynyc reading 
var fs = require('fs');
var content ;

fs.readFile('challenge.txt', 'utf8', function(err, data){
    if (err) {
      console.log(err);
      }
      content = data.toString() 
      console.log(content);
      console.log (typeof content)
    });

 // sync reading 
    var fs = require('fs');
    var content = fs.readFileSync('challenge.txt', 'utf8')
    console.log(content);

// hashing file and recorde it 

var crypto = require('crypto');
    var hash = crypto.createHash('md5').update(content).digest('hex');
    console.log(hash);
    fs.writeFileSync('writeChallenge.txt', hash);

