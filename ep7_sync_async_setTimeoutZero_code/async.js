const fs = require("fs");
const https = require("https");

console.log("Hello World!");

var a = 1078698;
var b = 20989;

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Fetch Data Successfully");
});

setTimeout(() => {
  console.log("setTimeout called after 5 seconds");
}, 5000);

// Synchronous file read
// `fs.readFileSync("./file.txt", "utf8");`
// This not need the callback function like `fs.readFile` (asynchronous)
// This will block the main thread until the file is read,
// which is not recommended for large files or in production code.



// Asynchronous file read
fs.readFile("./file.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File Data:", data);
});

function multiplyFn(a, b) {
  return a * b;
}

var c = multiplyFn(a, b);
console.log("Multiplication Result:", c);
