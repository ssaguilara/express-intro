//1ra forma

// function HomeRoutes(app) {
//   app.all("/about", (req, res) => res.send("about page"));
//   app.get("/dashboard", (req, res) => res.send("dashboard page"));
// }

// module.exports = HomeRoutes

//2da forma

const express = require("express");
const router = express.Router();
const axios = require('axios')

router.all("/about", (req, res) => res.send("about page"));

//esta ruta para ejemplos de templete engine

router.get("/", (req, res) => {
  let isActive = false;
  const users = [
    {
      id: 1,
      name: "ryan",
      lastname: "perez",
    },
    {
      id: 2,
      name: "sergio",
      lastname: "aguilar",
    },
  ];
  res.render("index", { title: "Index Page", isActive, users });
});

router.get("/dashboard", (req, res) => res.render("dashboard"));


router.get("/templete", (req, res) => {
  const title = "Mi pagina creada desde Express 2";

  res.render("index", { title });
});

//asyc code, peticion al servidor y del servidor a jsonplaceholder, tambien se podria consultar una base de datos
router.get("/posts", async (req, res) => {
    
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    // console.log(response)
    res.render("posts", {posts: response.data});//mando un objeto con la informacion
  });



module.exports = router;
