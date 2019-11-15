var express = require("express");
const BookController = require("../controllers/BookController");

var router = express.Router();

router.get("/listBooks", BookController.bookList);
router.get("/:bookId", BookController.bookDetail);
router.post("/addBooks", BookController.bookStore);
router.put("/:bookId", BookController.bookUpdate);
router.delete("/:bookId", BookController.bookDelete);

module.exports = router;