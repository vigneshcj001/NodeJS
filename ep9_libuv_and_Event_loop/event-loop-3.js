const fs = require("fs");

// 🔹 Scheduled in the CHECK phase
setImmediate(() => {
  console.log("A. setImmediate callback");
});

// 🔹 Scheduled in the TIMERS phase
setTimeout(() => {
  console.log("B. setTimeout callback");
}, 0);

// 🔹 Scheduled in the MICROTASK queue
Promise.resolve().then(() => {
  console.log("C. Promise callback");
});

// 🔹 Scheduled in the POLL phase (I/O operation)
fs.readFile("./file.txt", "utf8", () => {
  // 🔹 NEXT TICK — runs immediately after current operation (before any microtasks)
  process.nextTick(() => {
    console.log("D1. process.nextTick inside readFile callback");
  });

  // 🔹 PROMISE — microtask, runs after nextTick
  Promise.resolve().then(() => {
    console.log("D2. Promise inside readFile callback");
  });

  // 🔹 TIMERS — macrotask, runs in next timer phase
  setTimeout(() => {
    console.log("D3. setTimeout inside readFile callback");
  }, 0);

  // 🔹 CHECK phase — macrotask, runs after poll if poll completes
  setImmediate(() => {
    console.log("D4. setImmediate inside readFile callback");
  });
  // 🔹 Runs immediately (synchronous part of callback)
  console.log("D5. readFile callback");
});

// 🔹 NEXT TICK — highest async priority
process.nextTick(() => {
  console.log("E. process.nextTick callback");
});

// 🔹 Sync log
console.log("F. End of script");
