const express = require("express");
const app = express();

app.get("/hello/:user", (req, res) => {
    // devuelve objetos
    console.log(req.query); // { apellido: 'aguilar' } , { apellido: 'aguilar', edad: '30' }
    console.log(req.query.apellido) //aguilar
    console.log(req.query.edad) //30
    // console.log(req.params.user) // sergio  
    res.send(`Hola ${req.params.user.toUpperCase()} bienvenido`); //http://localhost:3000/hello/sergio/?apellido=aguilar&edad=30
  });

// http://localhost:3000/search/?q=javascript%20books
app.get("/search", (req, res) => {
  console.log(req.query); //http://localhost:3000/search/?user=sergio&user=steven   { user: [ 'sergio', 'steven' ] }
  console.log(req.query.q);
  if (req.query.q === "javascript books") {
    res.send("List of javascript books");
  } else {
    res.send("Not found");
  }
});  


app.listen(3000);
console.log("server on port ", 3000);