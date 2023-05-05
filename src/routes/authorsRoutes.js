import express from "express";
import authorsController from "../controllers/authorsController.js";

const router = express.Router();

router.get('/authors', authorsController.getAll);

router.get('/authors/:id', authorsController.getById);

router.post('/authors', authorsController.create);

router.put('/authors/', authorsController.update);

router.delete('/authors/:id', authorsController.delete);

export default router