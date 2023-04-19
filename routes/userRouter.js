const userController = require("../controllers/userController");
const express = require("express");
const router = express.Router();
// (/api/users)
router.post("/", userController.show);
// router.post("/login", userController.login);

module.exports = router;
