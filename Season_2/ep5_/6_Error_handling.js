const express = require("express");
const app = express();
const port = 3000;

app.get("/user/getData", (req, res) => {
  throw new Error("An error occurred while retrieving user data");

  res.send("User data retrieved");
});

app.use("/", (err, req, res, next) => {
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
