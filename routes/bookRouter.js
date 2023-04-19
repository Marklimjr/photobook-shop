const express = require("express");
const bookController = require("../controllers/bookController");
const router = express.Router();

router.post("/", bookController.show); // create new book entry
// router.get("/", bookController.index); // show artwork at artwork page
// router.get("/:id", bookController.show); // show find by ID
// router.delete("/:id", bookController.delete); // delete the artwork
// router.put("/:id", bookController.update); // edit and update the artwork

module.exports = router;
