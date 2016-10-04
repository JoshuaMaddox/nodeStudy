// Simple HTTP Call TO AN API_______________________________________
const http = require('http')
http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/plain"})
  res.write("Server Has Spun")
  res.end()
}).listen(8080)



// Simple HTTP Server_______________________________________
// const http = require('http')
// http.createServer((req, res) => {
//   res.writeHead(200, {"Content-Type": "text/plain"})
//   res.write("Server Has Spun")
//   res.end()
// }).listen(8080)


// Automate mkdir _______________________
// const fs = require('fs')
// const path = require('path')

// dirArr = ['src', 'component', 'actions', 'stores', 'css']
// fileArr = ['API.js', 'app.js', 'AppDispatcher.js', ]
// dirArr.forEach((item, index) => {
//   if(index === 0){
//     fs.mkdir(path.resolve(item))
//   } else {
//     fs.mkdir(path.resolve(`src/${item}`))
//   }
// })
// fileArr.forEach((item, index) => {
//   fs.open(path.resolve(`src/${item}`), 'w', (err, fd) => {
//     if(err){
//       console.log(err)
//     } else {
//       let writeData = `let myFunc = () => { return 'I am file #${index} added to the src directory'}\nmyFunc()\nmodule.exports.myFunc = myFunc`
//       let writeableStream = fs.createWriteStream(path.resolve(`src/${item}`))
//       writeableStream.write(writeData)
//       writeableStream.end()
//     }
//   })
// })

// Automate Include FS paths________________
// const fs = require('fs')
// const path = require('path')
// //Gets all of the files in the directory
// let filesArr = []
// fs.readdir(path.resolve('testDir'), (err, files) => {
//   filesArr = files
//   let writeData = ''
//   filesArr.forEach((item, index) => {
//     let newItem = item.replace(/\.[^/.]+$/, "")
//     if(index > 0){
//       writeData += `let ${newItem} = require('./${newItem}')\n`
//     } 
//   })
//   let writeableStream = fs.createWriteStream(path.resolve('testDir/app.js'))
//   writeableStream.write(writeData)
//   writeableStream.end()
// })



// fs.open(path.resolve('/testDir'), (err, fd) => {
//   console.log()
// })

//Streams______________________________
// const fs = require('fs')
// const path = require('path')
// let readableStream = fs.createReadStream(path.resolve('input.txt'))
// let data = ''
// readableStream.setEncoding('UTF8')
// readableStream.on('data', (chunk) => {
//   data += chunk
// })
// readableStream.on('end', () => {
//   console.log(data);
// })
// let writeData = 'Just wrote this text to the output file. SWEET!'
// let writeableStream = fs.createWriteStream(path.resolve('output.txt'))
// writeableStream.write(writeData, 'UTF8')
// writeableStream.end()
// writeableStream.on('finish', () => {console.log('Write Operation Completed')})


// FILE SYSTEM_______________________________________
// const fs = require('fs')
// const path = require('path')

// fs.readFile(path.resolve('input.txt'), (err, data) => {
//   if(err){
//     console.log('There was an error')
//   } else {
//     console.log(data.toString())
//   }
// })

// console.log('This is the end')


// EVENTS_______________________________________

// const events = require('events')
// const eventEmitter = new events.EventEmitter()

// const ringBell = function(){
//   console.log('Ring Ring')
//   eventEmitter.emit('bellrings', 'Welcome to my shop!')
// }

// eventEmitter.on('doorOpen', ringBell)
// eventEmitter.on('bellrings', (message) => {
//   console.log(message)
// })
// eventEmitter.emit('doorOpen')





// let athletics = require('./athletics')

// athletics.relay()
// athletics.longJump()

// console.log("User 1 made a request")
// setTimeout(callBack,5000)

// console.log("User 2 made a request")
// setTimeout(callBack,5000)

// function callBack((callback2)){
//   console.log('Queried the database and delivered data in 5 seconds')
//   setTimeout(callBack2(), 2000)
// }

// function callBack2(){
//   console.log('I am the second Callback')
// }

// function callBack3(){
//   console.log('I am the third Callback')
// }
// function callBack4(){
//   console.log('I am the fourth Callback')
// }

// console.log("User 3 made a request")
// setTimeout(callBack,5000)



//Global Object

// console.log('I am file name: ', __filename)
// console.log('I am file name: ', __dirname)

// function printStuff(){
//   console.log('This was from setInt')
// }

// setInterval(printStuff,2000)