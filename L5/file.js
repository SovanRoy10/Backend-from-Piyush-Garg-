const fs = require("fs"); // fs : file system
const { get } = require("http");

/*
//------------------------------creating file in node js--------------------------------------

//sync...
fs.writeFileSync("./test.txt", "Hey there");

//async...
fs.writeFile("./test1.txt", "Hello world", (err) => {}); 

*/

/*
//---------------------------Reading files in node js----------------------------------------------

//sync...
const result = fs.readFileSync("./contact.txt", "utf-8");
console.log(result);

//async...
fs.readFile("./contact.txt", "utf-8", (err, result) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log(result);
  }
}); 

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
