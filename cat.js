module.exports = function cat(cmd, fileName){
  if (cmd === 'cat'){
    const fs = require('fs');
    fs.readFile(fileName, (err, data) => {
      if(err) throw err;
      process.stdout.write(data);
      process.stdout.write('\nprompt > ')
    })
  }
}
