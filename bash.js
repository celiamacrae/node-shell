process.stdout.write('prompt > ');
const pwd = require('./pwd');
const ls = require('./ls');
require('fs');
const cat = require('./cat');

process.stdin.on('data', (data) => {
  // const cmd = data.toString().trim();
  const words = data.toString().trim().split(' ');
  const cmd = words[0];
  const fileName = words[1];
  pwd(cmd);
  ls(cmd);
  cat(cmd, fileName);
})
