const express = require("express");
const app = express();
const port = 3000;

app.use(
  "/user",
  (req, res, next) => {
    console.log("Received request at /user");
    next();
  },
  (req, res, next) => {
    console.log("✅ Sending response for /user");
    next();
  },
  (req, res) => {
    console.log("✅ Final handler: Sending response for /user");
    res.send("Middleware 3 response");
  }
);

app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});

// OUTPUT:
// Middleware 3 response
// Received request at /user
// ✅ Sending response for /user
// ✅ Final handler: Sending response for /user
