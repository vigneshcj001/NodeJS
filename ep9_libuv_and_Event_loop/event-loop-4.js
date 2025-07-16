const fs = require("fs");

setImmediate(() => {
  console.log("🔵 setImmediate (top-level)");
});

setTimeout(() => {
  console.log("🟡 setTimeout (top-level)");
}, 0);

Promise.resolve().then(() => {
  Promise.resolve().then(() => {
    console.log("🟢 Promise inside Promise.then (nested)");
  });

  process.nextTick(() => {
    console.log("🟣 process.nextTick inside Promise.then");
  });

  console.log("🟢 Promise.then (top-level)");
});

fs.readFile("./file.txt", "utf8", () => {
  console.log("📄 fs.readFile callback (poll phase)");
});

process.nextTick(() => {
  Promise.resolve().then(() => {
    console.log("🟢 Promise inside process.nextTick");
  });

  process.nextTick(() => {
    console.log("🟣 process.nextTick inside process.nextTick");
  });

  console.log("🟣 process.nextTick (top-level)");
});
