const fs = require("fs"); 
const a = 100; 

// 🔹 Scheduled in the CHECK phase (after poll phase or if poll is empty)
// Will run after I/O callbacks like fs.readFile (unless poll is empty)
setImmediate(() => {
  console.log("setImmediate callback");
});

// 🔹 Scheduled in the MICROTASK queue (after synchronous code, before timers/I/O)
// Executes after process.nextTick() and before setTimeout/fs.readFile
Promise.resolve().then(() => {
  console.log("Promise callback");
});

// 🔹 Scheduled in the POLL phase, after the I/O (non-blocking)
// Callback runs when file read is completed (may delay if read is slow)
fs.readFile("./file.txt", "utf8", () => {
  console.log("readFile callback");
});

// 🔹 Scheduled in the TIMERS phase (macrotask)
// Executes after microtasks like nextTick and Promise, but before setImmediate
setTimeout(() => {
  console.log("setTimeout callback");
}, 0);

// 🔹 Scheduled in the process.nextTick queue
// Executes immediately after synchronous code, before any other async task
process.nextTick(() => {
  console.log("process.nextTick callback");
});

// 🔹 Sync function definition and call
// Runs immediately in the main call stack
function printA() {
  console.log("a= ", a); 
}
printA(); // 🔹 Synchronous call

// 🔹 Final synchronous log
console.log("End of script");
