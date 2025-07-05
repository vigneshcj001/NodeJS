// Example of function scope in JavaScript
function x() {
  const a = 1;
  function b() {
    console.log("Hello from b!");
  }
}

console.log(a);
// ❌ This will throw a ReferenceError because 'a' is not defined in this scope.

// 🔹 Q1: How are variables and functions private in different modules/files?

/*
In Node.js, each file is treated as a separate module with its own scope.
This means that variables and functions declared in one file are not accessible
in other files by default.

Node.js achieves this by wrapping each module in a function.
This function is known as an Immediately Invoked Function Expression (IIFE),
which creates a local scope for each module.
*/

// Internal behavior of Node.js:
(function () {
  // All code in example.js (when you use require('./example.js')) is wrapped in this IIFE.
  const localVariable = "This is private to this module.";
  console.log("Module is running in its own scope.");
})();
// The above anonymous function executes immediately, isolating the module scope.

// 🔹 Q2: How do you access module-related variables like exports, require, __filename, and __dirname?

/*
Node.js provides several special variables to each module by injecting them
as parameters to the wrapper function.
*/

(function (exports, require, module, __filename, __dirname) {
  // Your module code goes here.

  // These parameters provide:
  // - exports: to expose variables or functions from the module
  // - require: to import other modules
  // - module: metadata about the current module
  // - __filename: the full path to the current file
  // - __dirname: the directory path of the current file

  console.log("Current filename:", __filename);
  console.log("Current directory:", __dirname);
})();

// 📌 Note:
// You don’t see this wrapper directly, but Node.js adds it behind the scenes.
// That’s why you can use `require`, `module`, and `exports` in any .js file
// without explicitly defining them.
