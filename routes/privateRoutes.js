const express = require("express");
const router = express.Router();
const pageController = require("../controllers/pageController");
const articleController = require("../controllers/articleController");
const articleRoutes = require("./articleRoutes");
const ensureisAuthenticated = require("../middlewares/ensureisAuthenticated");

router.get("/admin", ensureisAuthenticated, pageController.showAdmin);
router.use("/admin/articulos", articleRoutes);

module.exports = router;
