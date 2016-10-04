const os = require('os');
const readline = require('readline');

let osType = os.cpus()

console.log(osType[0].model + ' ----- ' + osType[0].speed + ' ----- ' + osType[0].times)

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Do you want me to output your detailed OS data? ', (answer) => {
  console.log(`Go fuck yourself! I'm a Mac, I do what I want!`)
  rl.close();
})


// rl.question(`Are you sure that ${firstAns} is the answer you want to submit?`)
//   rl.prompt()
//   console.log(`You've answered ${firstAns}`)