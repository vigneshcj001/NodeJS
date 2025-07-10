
const crypto = require('crypto');

console.log("Hello World!");

var a = 1078698;
var b = 20989;
crypto.pbkdf2Sync("passoword", "salt", 5000000, 50, "sha512");
console.log("First crypto is generated key (synchronous)");
crypto.pbkdf2("passoword", "salt", 5000000, 50, "sha512", (err, key) => {
  if (err) {
    console.error("Error in crypto operation:", err);
    return;
  }
  console.log("Second crypto is generated key (asynchronous)");
});


setTimeout(() => {
  console.log("setTimeout called after 5 seconds");
}, 5000);


function multiplyFn(a, b) {
  return a * b;
}

var c = multiplyFn(a, b);
console.log("Multiplication Result:", c);
