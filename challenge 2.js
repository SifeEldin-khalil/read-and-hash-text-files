// reading all files 

const fs = require("fs");
const crypto = require('crypto');

fs.readdir ('TextFiles', 'utf8', function(err, files) {

    if (err) {console.log(err);}
      else{
     
      for (let i = 0; i<files.length; i++) {
        fs.readFile(`TextFiles\\${files[i]}`, 'utf8', function(err, content){   
           if (err) {console.log(err);}
           else{
               console.log(content);
               
//hashing and printing 
 
               var hash = crypto.createHash('md5').update(content).digest('hex');
               console.log(hash);
               var hashedFile = files[i] ;
               console.log(hashedFile);
               fs.writeFileSync(`hashed_${hashedFile}`, hash);
        } 
    });
     }  
    }})
