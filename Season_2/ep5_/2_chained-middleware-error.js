const express = require("express");
const app = express();
const port = 3000;

app.use(
  "/user",
  (req, res, next) => {
    console.log("Received request at /user");
    next();
    res.send("Middleware response");
  },
  (req, res) => {
    res.send("Middleware 2 response");
    console.log("✅ Final handler: Sending response for /user");
  }
);

app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});

// OUTPUT:
// Middleware 2 response
// Received request at /user
// ✅ Final handler: Sending response for /user
// Error
