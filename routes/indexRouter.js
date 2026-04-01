const { Router } = require("express");
const index = Router();
const indexController = require("../controllers/indexController");

index.get("/", indexController.renderIndex);

module.exports = index;
