module.exports = function pwd(cmd){
  if (cmd === 'pwd'){
    const pwd = process.cwd()
    process.stdout.write(pwd)
    process.stdout.write('\nprompt > ')
  }
}


