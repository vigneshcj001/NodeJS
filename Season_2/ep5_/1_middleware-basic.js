const express = require("express");
const app = express();
const port = 3000;

app.use(
  "/user",
  (req, res, next) => {
    console.log("Received request at /user");
  }
);

app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});

// OUTPUT:
// Could not get response
