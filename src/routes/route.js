const express = require("express");
const apiController = require("../controllers/apiController");
const router = express.Router();

router
.post("/test", apiController.Test)
.post("/transform-data", apiController.TransformData)

module.exports = router;