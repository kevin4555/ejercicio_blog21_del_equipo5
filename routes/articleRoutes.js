const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");
const isAuthenticated = require("../middlewares/isAutenticated");

// Rutas relacionadas a los artículos:
// ...

router.get("/", articleController.index);
router.get("/new", isAuthenticated, articleController.create);
router.post("/", isAuthenticated, articleController.store);
router.get("/:id", articleController.show);
router.get("/edit/:id", isAuthenticated, articleController.edit);
router.post("/edit/:id", isAuthenticated, articleController.update);
router.get("/eliminar/:id", isAuthenticated, articleController.destroy);

module.exports = router;
