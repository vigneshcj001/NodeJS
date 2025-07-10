// ✅ Example of function scope in JavaScript
function x() {
  const a = 1;
  function b() {
    console.log("Hello from b!");
  }
}

console.log(a);
// ❌ This will throw a ReferenceError because 'a' is not defined in this scope.

// 🔹 Q1: How are variables and functions private across different modules/files?

/*
In Node.js, each file is treated as a separate module with its own scope.
This means that variables and functions declared in one file are not accessible
in other files by default.

Node.js achieves this by wrapping each module in a function.
This function is known as an Immediately Invoked Function Expression (IIFE),
which creates a private local scope for each module.
*/

// Internal behavior of Node.js (module wrapper simulation):
(function () {
  // All code in example.js (when required via require('./example.js')) is wrapped in this IIFE.
  const localVariable = "This is private to this module.";
  console.log("Module is running in its own scope.");
})();
// The above anonymous function executes immediately, isolating the module’s scope.

// 🔹 Q2: How do you access module-related variables like `exports`, `require`, `__filename`, and `__dirname`?

/*
Node.js provides several special variables to each module by injecting them
as parameters to the wrapper function.
*/

(function (exports, require, module, __filename, __dirname) {
  // Your module code goes here.

  // These parameters provide:
  // - exports: To expose variables or functions from the module
  // - require: To import other modules
  // - module: Metadata about the current module
  // - __filename: The full path to the current file
  // - __dirname: The directory path of the current file

  console.log("Current filename:", __filename);
  console.log("Current directory:", __dirname);
})();

// 📌 Note:
// You don’t see this wrapper directly, but Node.js adds it behind the scenes.
// That’s why you can use `require`, `module`, and `exports` in any .js file
// without explicitly defining them.

// 🔹 How `require("/path")` works in Node.js:

// 1. Module Resolution
//    Node checks if the path is:
//    - A built-in module (e.g., 'fs', 'http')
//    - A relative/local path (e.g., './file.js')
//    - A node_modules package
//    - A JSON or native Node module

// 2. Module Loading
//    The content is loaded based on its type (.js, .json, .node, etc.)

// 3. Wrapping Inside an IIFE
//    The entire file content is wrapped in a function for isolation.

// 4. Code Evaluation
//    The code is executed, and the value assigned to `module.exports` is returned.

// 5. Module Caching
//    If the same module is required in multiple places,
//    Node.js caches it after the first execution.
//    Future `require` calls return the cached exports,
//    preventing redundant executions.


// https://github.com/nodejs/node/blob/main/lib/internal/modules/helpers.js
// This link provides insight into the require function's implementation (function name is makeRequireFunction)