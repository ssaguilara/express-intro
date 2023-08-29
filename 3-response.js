const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the Home Page");
});

app.get("/miarchivo", (req, res) => {
//   res.setHeader("Content-Type", "text/plain");//especifica el tipo de contenido que se envia, cliente interpreta mejor 'image/jpeg' en vez de text/plain
  res.sendFile("./javascript.jpg", {
    root: __dirname,
  });
});

app.get("/user", (req, res) => {
  res.json({
    username: "Ryan",
    lastname: "Ray",
  });
});

app.get("/users", (req, res) => {
  res.json([
    {
      username: "Ryan",
      lastname: "Ray",
    },
    {
      username: "John",
      lastname: "Doe",
    },
    {
      username: "Jane",
      lastname: "Doe",
    },
  ]);
});

app.get("/isAlive", (req, res) => {
  res.status(200).end(); // responda un codigo de estado + contenido
});

app.get("/isalive2", (req, res) => {
  res.sendStatus(200); //solo devuelve el codigo de estado
});

app.listen(3000);
console.log("Server on port 3000");
