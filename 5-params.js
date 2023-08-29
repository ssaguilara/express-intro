const express = require("express");
const app = express();

app.get("/hello/:user", (req, res) => {
  //console.log(req); // objeto con funciones y ropiedades muy grande
  console.log(req.params); // { user: 'sergio' }
  // todo parametro que recibimos es en forma de string
  console.log(req.params.user) // sergio  
  res.send(`Hola ${req.params.user.toUpperCase()} bienvenido`); // http://localhost:3000/hello/sergio
});

//diferente forma de extraer un parametro

app.get("/suma/:x/:y", (req, res) => {
  console.log(req.params.x);
  console.log(req.params.y);
  const result = parseInt(req.params.x) + parseInt(req.params.y)
  res.send(`Result: ${result}`);
});

app.get("/resta/:x/:y", (req, res) => {
  const {x , y} = req.params
  res.send(`Result: ${parseInt(x) - parseInt(y)}`);
});

app.get("/multi/:x/:y", ({params:{x , y}}, res) => {
  res.send(`Result: ${parseInt(x) * parseInt(y)}`);
});

app.get("/id/:userId", (req, res) => {
  let userId = parseInt(req.params.userId);
  userId++;
  console.log(userId);
  res.send("Your user Id + 1 is: " + userId);
});

app.get("/users/:username/photo", (req, res) => { // /users/sergio/photo necesita sea completa para que funcione
  if (req.params.username === "sergio") {
    // res.setHeader("nickname", req.params.username);
    return res.sendFile("./javascript.jpg", { root: __dirname }); 
    //sin el return mostraria lo de abajo porque senFile va apenas procesando y enviando y se enviaria lo de abajo, con return evitamos esto no siga lo de abajo
  }
  res.end("Usuario no permitido");
});

app.get("/nombre/:nombre/edad/:edad", (req, res) => {
  console.log(req.params)
  const {nombre , edad} = req.params
  res.send(`Nombre: ${nombre.charAt(0).toUpperCase()+nombre.slice(1).toLowerCase()} - Edad: ${edad}`);// la primera sea matuscula y el resto minuscula siempre
});


app.listen(3000);
console.log("Server on port ", 3000);
