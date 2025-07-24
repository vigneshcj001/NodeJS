/*
=======================
/src
  /Middleware
    auth.js
  app.js
=======================
*/

/*
=======================
Folder Name: Middleware
=======================
File Name: auth.js
=======================
*/
const adminAuthMiddleware = (req, res, next) => {
  const token = "XYZ";
  const isAdminAuthenticated = token === "XYZb";
  if (!isAdminAuthenticated) {
    return res.status(403).send("Access denied");
  }
  next();
};

const userAuthMiddleware = (req, res, next) => {
  const token = "XYZ";
  const isAdminAuthenticated = token === "XYZb";
  if (!isAdminAuthenticated) {
    return res.status(403).send("Access denied");
  }
  next();
};

module.exports = { adminAuthMiddleware, userAuthMiddleware };

/*
=======================
File Name: app.js
=======================
*/

const express = require("express");
const app = express();
const {
  adminAuthMiddleware,
  userAuthMiddleware,
} = require("./Middleware/auth");
const port = 3000;
app.use("/admin", adminAuthMiddleware);

app.get("/user/getData", userAuthMiddleware, (req, res) => {
  res.send("User data retrieved");
});

app.get("/admin/getAllData", (req, res) => {
  res.send("All admin data");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("User deleted");
});

app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});

/*
=======================
📦 OUTPUT (AFTER START)
=======================
Terminal:
🚀 Server is running at http://localhost:3000

Browser/Postman:

1. GET http://localhost:3000/admin/getAllData
   ➤ Response: All admin data

2. GET http://localhost:3000/admin/deleteUser
   ➤ Response: User deleted

If token check failed (e.g., token !== "XYZ"):
   ➤ Response: Access denied (HTTP 403)

*/
