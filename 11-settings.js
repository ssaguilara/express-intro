const express = require("express");
const morgan = require("morgan");

const app = express();

//configuraciones

//añadir un comportamiento nuevo a express
app.set('appName','Express Course') // establecer el nombre de una variable y su valor
app.set('port',3000)
app.set('case sensitive routing', true) // que las rutas si distingan entre mayusculas y minusculas, este nombre si es propio de expres los anteriores no


// middlewares
app.use(express.json()); // esto tambien es un middlewares
app.use(morgan("dev")); // realiza lo que esta comentado anteriormente


//routes
app.get("/profile", (req, res) => res.send("profile page"));

app.all("/about", (req, res) => res.send("about page"));

// app.use((req, res, next) => {
//   if (req.query.login === "ssaguilara") {
//     //http://localhost:3000/dashboard/?login=ssaguilara
//     next();
//   } else {
//     res.send("No autorizado");
//   }
// });

app.get("/dashboard", (req, res) => {
  console.log(req.body);
  res.send("dashboard page");
});

app.listen(app.set('port'));
console.log(`server ${app.get('appName')} on port ${3000}`);
