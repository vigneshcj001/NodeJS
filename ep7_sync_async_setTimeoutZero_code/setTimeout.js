const crypto = require("crypto"); // Import the built-in crypto module

console.log("Hello World!"); // Synchronous log (executes immediately)

var a = 1078698;
var b = 20989;

// 🔒 Synchronous (blocking) crypto operation
// This blocks the event loop until the key is generated
crypto.pbkdf2Sync("passoword", "salt", 5000000, 50, "sha512");
console.log("First crypto is generated key (synchronous)");

// 🔓 Asynchronous (non-blocking) crypto operation
// This is offloaded to libuv's thread pool
crypto.pbkdf2("passoword", "salt", 5000000, 50, "sha512", (err, key) => {
  if (err) {
    console.error("Error in crypto operation:", err);
    return;
  }
  console.log("Second crypto is generated key (asynchronous)");
});

// ⏱ setTimeout with 0ms delay
// This goes into the timer queue and runs after the current call stack is empty
setTimeout(() => {
  console.log("Call me right now!!!"); // Executes after all synchronous code
}, 0);

// ⏳ setTimeout with 5 seconds delay
// This runs after ~5 seconds, in the timer queue
setTimeout(() => {
  console.log("Call me after 5 seconds");
}, 5000);

// 🧮 Simple synchronous multiplication function
function multiplyFn(a, b) {
  return a * b; // Just returns product
}

// Call the function and log the result (synchronously)
var c = multiplyFn(a, b);
console.log("Multiplication Result:", c); // Logs the result immediately
