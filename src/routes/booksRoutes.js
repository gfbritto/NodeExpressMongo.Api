import express from "express";
import booksController from "../controllers/booksController.js";

const router = express.Router();

router.get('/books', booksController.getAll);

router.get('/books/:id', booksController.getById);

router.post('/books', booksController.create);

router.put('/books/', booksController.update);

router.delete('/books/:id', booksController.delete);

export default router