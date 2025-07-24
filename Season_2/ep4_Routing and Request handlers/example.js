const express = require("express");
const app = express();
const port = 3000;

// ✅ Route using RegExp to match literal /ab+c
// This matches paths like /abc, /abbc, /abbbc (1 or more 'b's)
app.get(/^\/ab+c$/, (req, res) => {
  res.send("Route matched: /ab+c");
});

// ✅ Route using RegExp to match /a*cd
// This matches paths like /acd, /abcd, /aaabcd (any number of characters between a and cd)
app.get(/^\/a.*cd$/, (req, res) => {
  res.send("Route matched: /a*cd");
});

// ✅ Route using RegExp to match /abc and /ac
// The 'b' is optional (0 or 1 occurrence)
app.get(/^\/ab?c$/, (req, res) => {
  res.send("Route matched: /ab?c");
});

// ✅ Exact match for "/a/" (note the trailing slash)
app.get("/a/", (req, res) => {
  res.send("Route matched: /a/");
});


// Test route
app.get("/test", (req, res) => {
  res.send("Hello from test route!!");
});

// Hello route (case-sensitive)
app.get("/Hello", (req, res) => {
  res.send("Hello from Hello route!!");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
