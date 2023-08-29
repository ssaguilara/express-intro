// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) =>{
//     //leer el contenido de un archivo en fragmentos más pequeños
//     const read = fs.createReadStream('./static/index.html')
//     //conecta dos flujos de datos (stream), es decir mientras va leyendo se lo va pasando a res(redirigiendo)
//     read.pipe(res)
// })

// server.listen(3000)
// console.log("Server on port 3000") // http://localhost:3000/

//todo Esto seria equivalente a lo anterior

//https://www.npmjs.com/package/express

// instalamos  npm i express
const express = require("express");

// incializamos app (es el servidor en express)
const app = express();

//enviar el archivo a travez de la funcion get, ruta inicial /
app.get("/", (req, res) => {
  // sendFile funcion para leer un archivo y enviarlo
  res.sendFile("./static/index.html", {
    root: __dirname, //aca toca especificar de donde viene el archivo
  });
});

//routings: aplicacion web como responde a diferentes rutas 

app.get("/a", (req, res) => {
  res.end("Hello world 2"); // en el dev tools se ve que lo pone entre etiquet prev no sabe en que etiqueta se puso, esto no da mucha informacion del elemento que se esta enviando
});

app.get("/s", (req, res) => {
  res.send("Hello world 3"); // en el dev tools se ve que lo pone entre etiquetas text
});

app.get("/d", (req, res) => {
  res.send("Hello world 4"); // en el dev tools se ve que lo pone entre etiquetas text
});

app.use((req, res) => {
    res.status(404).send("No se encontro tu pagina"); // si la ruta no existe, ya paso por todas las rutas llega aqui a la ultima ruta // estado 200 ver el souce en el devtools o encadenar una funcion 404
  });

app.listen(3000);
console.log("Express app started on port 3000");
