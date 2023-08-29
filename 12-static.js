const express = require("express");
const morgan = require("morgan");
const path = require('path') // concatenar directorios(carpetas)

const app = express();

//configuraciones

//añadir un comportamiento nuevo a express
app.set('appName','Express Course') 
app.set('port',3000)
app.set('case sensitive routing', true) 


// middlewares
app.use(express.json()); 
app.use(morgan("dev")); 

//routes
app.get("/profile", (req, res) => res.send("profile page"));

app.all("/about", (req, res) => res.send("about page"));

app.get("/note.txt", (req, res) => res.send("esto no es un archivo de texto"));// muestra el contenido del texto porque esta debajo del app.use(express.static('./static'));


// app.use((req, res, next) => {
//   if (req.query.login === "ssaguilara") {
//     //http://localhost:3000/dashboard/?login=ssaguilara
//     next();
//   } else {
//     res.send("No autorizado");
//   }
// });



//suele ponerse los archivos publicos aqui, primero se procesan rutas y despues se busca en la carpeta definida

app.use(express.static('./static')); //nombre de la carpeta puede ser cualquiera, aqui se accede a todos los archivos de esta carpeta
// http://localhost:3000/index.css
// http://localhost:3000/index.txt

app.use('/public',express.static('./static'));//tambien podemos condicionar bajo que url, podemos acceder a esta carpeta
// http://localhost:3000/public/index.css

//se puede tener varias carpetas para archivos staticos
//expresss por defecto considera que las carpetas estan dentro de la ruta incial, si se pone una dentro de otra no funciona, hay que usar el modulo path

//direccion completa hasta la carpeta de este archivo
//console.log(__dirname)//C:\Users\Admin\Desktop\express

app.use('/upload', express.static(path.join(__dirname, 'src'))); //http://localhost:3000/upload/src.txt
app.use('/upload', express.static(path.join(__dirname, 'src/upload'))); //http://localhost:3000/upload/upload.txt

app.listen(app.set('port'));
console.log(`server ${app.get('appName')} on port ${3000}`);
