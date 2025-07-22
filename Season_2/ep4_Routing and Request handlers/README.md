# Routing and Request Handlers

## HTTP Methods

### 1. POST

* Used to create a new resource
* Request body contains the data to be created
* Example: Creating a new user account

### 2. GET

* Used to retrieve a resource
* Request query parameters can be used to filter or sort data
* Example: Retrieving a list of users

### 3. PATCH

* Used to partially update a resource
* Request body contains the changes to be made
* Example: Updating a user's profile information

### 4. DELETE

* Used to delete a resource
* Example: Deleting a user account

### 5. PUT

* Used to replace a resource entirely
* Request body contains the new data
* Example: Updating a user's entire profile information

## Notes

* HTTP methods can be used to perform CRUD (Create, Read, Update, Delete) operations on resources
* Understanding the differences between these methods is crucial for building a robust and scalable backend

## API Testing with Postman

### What is Postman?

* Postman is a popular API testing tool that allows you to send HTTP requests and view responses in a user-friendly interface.

### Why use Postman?

* Postman provides an easy way to test and debug APIs, making it an essential tool for backend development.

### How to use Postman?

* Download and install Postman from the official website
* Create a new request by selecting the HTTP method (e.g., GET, POST, PUT, DELETE) and entering the API endpoint URL
* Add request headers, query parameters, and body data as needed
* Send the request and view the response in the Postman interface

# Advanced Routing in Node.js

## Overview
Routing in Node.js allows you to define how the server responds to various HTTP requests. Advanced routing techniques can be used to create dynamic and flexible routes by using special characters like `+`, `?`, `*`, and regular expressions.

## Special Characters in Routing

### 1. `+` (Plus)
- The `+` character matches one or more occurrences of the preceding character.
- Example:
  ```
  app.get('/ab+c', (req, res) => {
    res.send('Route matched: /ab+c');
  });
  ```

#### The route /ab+c would match:
- /abc
- /abbc
- /abbbc, and so on.

###  `?` (Question Mark)
- The `?` character makes the preceding character optional in an Express route pattern.
- Example:
```
app.get('/ab?c', (req, res) => {
  res.send('Route matched: /ab?c');
});
```
#### This route will match:
- /abc
- /ac (since b is optional).

### `*` (Asterisk)
- The `*` character matches any sequence of characters in an Express route.
- Example:
```
app.get('/a*cd', (req, res) => {
  res.send('Route matched: /a*cd');
});
```
#### This route will match:
- /acd
- /abcd
- /axyzcd, etc.

### Regular Expressions
- Regular expressions (regex) can be used in Express routing to match complex patterns.
- Examples:
```
app.get(/a/, (req, res) => {
  res.send('Route matched any path containing "a"');
});
```
#### This route will match:
- /abc
- /a123
- /123a, etc.