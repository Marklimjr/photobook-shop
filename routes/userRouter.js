const userController = require("../controllers/userController");
const express = require("express");
const router = express.Router();

// (/api/users)

router.post("/", userController.create);
router.post("/login", userController.login);

router.get("/:userId/favourites", userController.getFavouriteBooks);
router.post("/:userId/favourites/:bookId", userController.addFavouriteBook);
router.delete(
  "/:userId/favourites/:bookId",
  userController.deleteFavouriteBook
);

module.exports = router;
