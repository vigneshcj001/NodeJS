// to run this file use the command:
// $env: UV_THREADPOOL_SIZE = 10;
// node Thread_pool.js
const crypto = require("crypto");
console.log("Thread pool size from env:", process.env.UV_THREADPOOL_SIZE);

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("1. pbkdf called");
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("2. pbkdf called");
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("3. pbkdf called");
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("4. pbkdf called");
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("5. pbkdf called");
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("6. pbkdf called");
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("7. pbkdf called");
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("8. pbkdf called");
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("9. pbkdf called");
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("10. pbkdf called");
});
