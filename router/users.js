//1ra forma

// function UsersRoutes(app) {
//   app.get("/username", (req, res) => res.send("username page"));

//   app.post("/profile", (req, res) => res.send("profile page"));
// }

// module.exports = UsersRoutes

//2da forma

const {Router} = require("express");
const router = Router();

router.get("/users", (req, res) => res.render("users"));

router.get("/profile", (req, res) => res.send("profile page"));

module.exports = router;
