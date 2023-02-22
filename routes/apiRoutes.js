const express = require("express");
const router = express.Router();
const { expressjwt: checkJwt } = require("express-jwt");
const apiController = require("../controllers/apiController");

router.post("/tokens", apiController.tokens);

router.use(checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }));

router.get("/articulos", apiController.index);

module.exports = router;
