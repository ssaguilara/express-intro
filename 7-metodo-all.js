const express = require("express");
const app = express();

//al indica que funciona con todos los metodos http, como crear multiples rutas en una sola
app.all("/info", (req, res) => {
    res.send(`server info`);
  });

// http://localhost:3000/search/?q=javascript%20books
 

app.listen(3000);
console.log("server on port ", 3000)