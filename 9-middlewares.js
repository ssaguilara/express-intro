const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log(`Route: ${req.url} Method: ${req.method}`) //      /about Method: GET
  next();
});

app.get("/profile", (req, res) => res.send("profile page"));

app.all("/about", (req, res) => res.send("about page")); 

// aplica a cualquier url que este abajo de esta funcion
app.use((req, res, next) => {
    if(req.query.login === "ssaguilara"){ //http://localhost:3000/dashboard/?login=ssaguilara
        next();
    } else {
        res.send('No autorizado')
    }
});

//pa poder llegar al dash board pasar por los dos use anteriores (middleweares)

app.get("/dashboard", (req, res) => res.send("dashboard page"));


app.listen(3000);
console.log("server on port", 3000);