const express = require("express");
const router = express.Router();
const pageController = require("../controllers/pageController");
const articleController = require("../controllers/articleController");
const authController = require("../controllers/authController");
const isAuthenticated = require("../middlewares/isAutenticated");

router.post("/login", authController.login);
router.get("/login", isAuthenticated, authController.index);
router.get("/logout", authController.logout);
router.get("/register", authController.register);
router.post("/register", authController.storeUser);
router.get("/", pageController.showHome);
router.get("/articulos/:id", articleController.show);

module.exports = router;
