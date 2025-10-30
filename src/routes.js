import express from "express";
import {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  updateBookHandler,
  deleteBookHandler,
} from "./handlers.js";

const router = express.Router();

router.post("/books", addBookHandler);
router.get("/books", getAllBooksHandler);
router.get("/books/:bookId", getBookByIdHandler);
router.put("/books/:bookId", updateBookHandler);
router.delete("/books/:bookId", deleteBookHandler);

export default router;
