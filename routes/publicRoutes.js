const express = require("express");
const router = express.Router();
const pageController = require("../controllers/pageController");
const articleController = require("../controllers/articleController");
const authController = require("../controllers/authController");
const ensureisAuthenticated = require("../middlewares/ensureisAuthenticated");
const redirectifAuthenticated = require("../middlewares/redirectIfAuthenticated");

router.post("/login", authController.login);
router.get("/login", redirectifAuthenticated,authController.index);
router.get("/logout", authController.logout);
router.get("/register", authController.register);
router.post("/register", authController.storeUser);
router.get("/", pageController.showHome);
router.get("/articulos/:id", articleController.show);

module.exports = router;
