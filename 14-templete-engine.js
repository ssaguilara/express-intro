const express = require("express");
const morgan = require("morgan");
const path = require('path') // concatenar directorios(carpetas)
require('ejs') // no es necesario guardar en constate, se puede suar sin esto


const app = express();

const homeRouter = require('./router/home')
const usersRouter = require('./router/users')

//configuraciones
app.set('appName','Express Course') 
app.set('port',3000)
app.set('case sensitive routing', true) 

app.set('view engine','ejs') // configuracion para templete engine
app.set('views', path.join(__dirname, 'views')) // configuracion para templete engine

// middlewares
app.use(express.json()); 
app.use(morgan("dev")); 

///carpeta router
// 1ra forma funciones
// homeRouter(app)
// usersRouter(app)

// 2da forma modulos, esta es la mas comun
app.use(homeRouter)
app.use(usersRouter)

app.use('/public',express.static('./static'));

// app.use('/upload', express.static(path.join(__dirname, 'src'))); //http://localhost:3000/upload/src.txt
app.use('/upload', express.static(path.join(__dirname, 'src/upload'))); //http://localhost:3000/upload/upload.txt

app.listen(app.set('port'));
console.log(`server ${app.get('appName')} on port ${3000}`);