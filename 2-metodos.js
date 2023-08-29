// instalamos  npm i express
const express = require("express");

// incializamos app (es el servidor en express)
const app = express();

app.get("/products", (req, res) => {
  res.send("lista de productos"); 
});

app.post("/products", (req, res) => {
    res.send("guardando/creando productos"); 
  });

app.put("/products", (req, res) => {
    res.send("actualizando productos"); 
});

app.delete("/products", (req, res) => {
    res.send("eliminando productos"); 
});

app.patch("/products", (req, res) => {
    res.send("actualizando un solo producto"); 
});

app.listen(3000);
console.log(`Express app started on port ${3000}`);