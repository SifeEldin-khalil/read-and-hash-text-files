
const fs = require("fs");
const crypto = require('crypto');
let filesnames ; 


function getfiles () {
  return new Promise ((resolve, reject) => {
    fs.readdir ('TextFiles', 'utf8', (err, files)=> {
      if (err){
        console.log (err);
        reject("ERROR"); 

      }else{ 
        filesnames = files;
        console.log (filesnames);
        resolve();

      }
    });
  });
}


function readfiles () {
  for (let i = 0; i<filesnames.length; i++) {
    fs.readFile(`TextFiles\\${filesnames[i]}`, 'utf8', function(err, content){   
       if (err) {
         console.log(err);
        } else{
           console.log(content);
           var hash = crypto.createHash('md5').update(content).digest('hex');
           console.log(hash);
           var hashedFile = filesnames[i] ;
           console.log(hashedFile);
           fs.writeFileSync(`hashed_${hashedFile}`, hash);
          } 
      });
   }  
}

getfiles().then(readfiles).catch(err=> console.log(err));

