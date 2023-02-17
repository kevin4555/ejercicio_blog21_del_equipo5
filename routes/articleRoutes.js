const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");
const ensureisAuthenticated = require("../middlewares/ensureisAuthenticated");

// Rutas relacionadas a los artículos:
// ...

router.get("/", articleController.index);
router.get("/new", ensureisAuthenticated, articleController.create);
router.post("/", ensureisAuthenticated, articleController.store);
router.get("/:id", articleController.show);
router.get("/edit/:id", ensureisAuthenticated, articleController.edit);
router.post("/edit/:id", ensureisAuthenticated, articleController.update);
router.get("/eliminar/:id", ensureisAuthenticated, articleController.destroy);

module.exports = router;
