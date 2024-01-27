const fs = require("fs"); // fs : file system

/*
//------------------------------creating file in node js--------------------------------------

//sync...
fs.writeFileSync("./test.txt", "Hey there");

//async...
fs.writeFile("./test1.txt", "Hello world", (err) => {}); 

*/

/*
//---------------------------Reading files in node js----------------------------------------------

console.log("1");
//sync...
// const result = fs.readFileSync("./contact.txt", "utf-8");
// console.log(result);

//async...
fs.readFile("./contact.txt", "utf-8", (err, result) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log(result);
  }
});
console.log("2");

*/

/*
//--------------------------------appending data in node js------------------------------------

//sync...

// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());
fs.appendFileSync("./test.txt", `\nHey there`);

*/

/*

//--------------------------------------copy files in node js--------------------------
fs.cpSync("./test.txt", "./copy.txt");

*/

/*
//-------------------------------------delete files in node js--------------------------------
fs.unlinkSync("./copy.txt");

*/

// default Thread Pool size = 4
// Max ? -8 core cpu - 8

const os = require("os");
console.log(os.cpus().length); // 12 core cpu
