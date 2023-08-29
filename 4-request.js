const express = require("express");

const app = express();

app.use(express.text());//procese el texto de la aplicaciones cliente y se pueda entender
//usar thunder client para enviar texto en el body

app.use(express.urlencoded({ extended: false }));//procese datos desde un formulario, false ques son datos simples, prueba form.encode

//false [Object: null prototype]{json}
//true {json}

app.use(express.json());//procese json de la aplicaciones cliente

app.post("/user", (req, res) => {
//   console.log(req.headers);
  console.log(req.body);
  const body = req.body
  // res.send("nuevo usuario creado"); // nose puede enviar varios send.
  res.send(body);
});

app.listen(3000);
console.log("Server on port 3000");