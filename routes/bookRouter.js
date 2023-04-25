const express = require("express");
const bookController = require("../controllers/bookController");
const router = express.Router();

router.post("/", bookController.create);
router.put("/:id", bookController.update);
router.get("/", bookController.index);
router.get("/:id", bookController.show);
router.delete("/:id", bookController.deleteBook);
router.get("/sale", bookController.searchSale);

module.exports = router;
