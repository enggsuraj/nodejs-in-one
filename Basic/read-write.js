/************** SYNCHRONOUS FILE READING **************/

const fs = require('fs')
const textIn = fs.readFileSync('./txt/input.txt','utf-8')
console.log(`Sysnc read: ${textIn}`);

const textOut  = "blogtheorem";
fs.writeFileSync('./txt/final.txt', textOut)

const dataout = fs.readFileSync('./txt/final.txt','utf-8')
console.log(dataout);

/************** ASYNCHRONOUS FILE READING **************/

fs.readFile('./txt/final.txt', (err, data) => {
  if (err) throw err;
  console.log(data);
});