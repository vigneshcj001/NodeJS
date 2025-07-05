function x() {
  const a = 1;
  function b() {
    console.log("Hello from b!");
  }
}

console.log(a);
// ❌ This will throw a ReferenceError because 'a' is not defined in this scope.

// 🔹 Q1. How are variables and functions private in different modules/files?

// In Node.js, each file has its own module scope.
// This means that variables and functions declared in one file are not accessible in other files by default.
// Node.js achieves this by treating every file as a separate module,
// internally wrapping the file's contents inside a function.
// That function is called an Immediately Invoked Function Expression (IIFE).

// Example:
(function () {
  // When you use require('./example.js') in another file,
  // all the code inside example.js is executed inside this IIFE wrapper.
})();

// This anonymous function is executed immediately.

// 🔹 Q2. How do you access module-related variables like exports, require, __filename, and __dirname?

// Node.js wraps each module in a function like this:
(function (exports, require, module, __filename, __dirname) {
  // Your module code goes here.
  // These parameters provide access to:
  // - exports: to export variables/functions from the module
  // - require: to import other modules
  // - module: metadata about the current module
  // - __filename: the absolute path of the current file
  // - __dirname: the directory path of the current file
})();
