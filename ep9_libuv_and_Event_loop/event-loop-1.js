const fs = require("fs");
const a = 100;

// Scheduled in the check phase
setImmediate(() => {
  console.log("setImmediate callback");
});

// Scheduled in the poll phase, after I/O completes
fs.readFile("./file.txt", "utf8", () => {
  console.log("readFile callback");
});

// Scheduled in the timers phase
setTimeout(() => {
  console.log("setTimeout callback");
}, 0);

// Sync function
function printA() {
  console.log("a= ", a);
}
printA();
console.log("End of script");
