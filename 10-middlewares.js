const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.json()); // esto tambien es un middlewares

// app.use((req, res, next) => {
//   console.log(`Route: ${req.url} Method: ${req.method}`) //      /about Method: GET
//   next();
// });

app.use(morgan("dev")); // realiza lo que esta comentado anteriormente

app.get("/profile", (req, res) => res.send("profile page"));

app.all("/about", (req, res) => res.send("about page"));

app.use((req, res, next) => {
  if (req.query.login === "ssaguilara") {
    //http://localhost:3000/dashboard/?login=ssaguilara
    next();
  } else {
    res.send("No autorizado");
  }
});

app.get("/dashboard", (req, res) => {
  console.log(req.body);
  res.send("dashboard page");
});

app.listen(3000);
console.log("server on port", 3000);
