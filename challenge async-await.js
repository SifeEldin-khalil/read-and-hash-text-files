// reading all files 

const fs = require("fs");
const crypto = require('crypto');
var filesarr ;


function getfiles () {
  return new Promise ((resolve, reject) => {
  
    fs.readdir ('TextFiles', 'utf8', (err, files)=> {
      if (err){
        reject("ERROR");
        console.log (err);
      }else{
        resolve();
        filesarr = files;
        console.log (filesarr);
      }
    });
});
}


function readfiles () {
    let filesnames = filesarr;
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

async function start() {
  await getfiles();
        readfiles();
}

 start();