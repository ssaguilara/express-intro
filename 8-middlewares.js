const express = require("express");
const app = express();

//cualquier ruta de mi aplicacion va pasar por aqui
//tener cuidado de que se garantice el fujo porque sino no llega a la siguiente operacion
app.use((req, res, next) => {
    // console.log(`Paso por aqui`)
    console.log(`Route: ${req.url} Method: ${req.method}`) //      /about Method: GET
next();// no bloque el flujo
});

app.get("/profile", (req, res) => res.send("profile page"));

app.all("/about", (req, res) => res.send("about page")); // usar thunder client


app.listen(3000);
console.log("server on port", 3000);