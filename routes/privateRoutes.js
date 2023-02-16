const express = require("express");
const router = express.Router();
const pageController = require("../controllers/pageController");
const articleController = require("../controllers/articleController");
const articleRoutes = require("./articleRoutes");
const isAuthenticated = require("../middlewares/isAutenticated");

router.get("/admin", isAuthenticated, pageController.showAdmin);
router.use("/admin/articulos", articleRoutes);

module.exports = router;
