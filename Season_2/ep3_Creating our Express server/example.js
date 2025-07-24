const express = require("express");
const app = express();
const port = 3000;

// User GET route — returns user object
app.get("/user", (req, res) => {
  res.send({
    firstName: "John",
    lastName: "Doe",
    age: 30,
  });
});

// User POST route — simulates creating a user
app.post("/user", (req, res) => {
  res.send("User created successfully!");
});

// User DELETE route — simulates deleting a user
app.delete("/user", (req, res) => {
  res.send("User deleted successfully");
});
// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
