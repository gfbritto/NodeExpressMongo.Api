import express from "express";
import booksController from "../controllers/booksController.js";

const router = express.Router();

router.get('/books', booksController.getAll);

router.post('/books', booksController.create);

export default router