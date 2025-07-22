# Syncly Project

### Learning Journey

---

#### 1. What is Express Framework?

* **Express** is a minimal, flexible, and robust web application framework for Node.js that simplifies server-side development.
* Explored the official website to understand its purpose and features: [Express.js Official Website](https://expressjs.com)

---

#### 2. Installing Express

* Installed Express in the project using npm:

  ```bash
  npm install express
  ```
* This added the Express framework to the `package.json` file under dependencies and created the `node_modules` folder to store the installed packages.

---

### 3. Creating a Basic Server with Express

```js
const express = require("express");
const app = express();
const port = 3000;

app.use("/test", (req, res) => {
    res.send("Server started ");
});

app.use("/main", (req, res) => {
    res.send("another route");
});

app.listen(port, () => {
    console.log("Server started running on port " + port);
});
```

---

### 4. Server Output (Console & Browser)

#### ✅ Console Output:

When you run the server using `node server.js`:

```
Server started running on port 3000
```

#### 🌐 Browser Output:

* Accessing [http://localhost:3000/test](http://localhost:3000/test):

  ```
  Server started
  ```

* Accessing [http://localhost:3000/main](http://localhost:3000/main):

  ```
  another route
  ```

---

### 5. Understanding the `-g` Flag in `npm install`

#### What is `-g` in `npm install`?

* The `-g` flag stands for **"global"**, and is used to install packages system-wide.

---

### 6. Local vs. Global Installation

#### Local Installation (Default)

* `npm install <package>` installs in your project's `node_modules` directory.
* Accessible only within that project.
* Added to `package.json` under `dependencies`.

#### Global Installation (`-g` Flag)

* `npm install -g <package>` installs the package globally.
* Accessible from any directory via the command line.
* Ideal for CLI tools like `nodemon`, `eslint`, `typescript`.

---

### 7. Example Global Installation

```bash
npm install -g nodemon
```


