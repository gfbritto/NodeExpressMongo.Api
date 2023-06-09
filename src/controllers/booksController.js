import Book from "../models/Book.js";

import { authorsCollection } from "../config/dbCollections.js";

const authorProperty = 'author';

class LivroController {

    static async getById(req, res) {
        try {
            const { id } = req.params;
            const book = await Book.findById(id)
                .populate(authorProperty)
                .exec();
            if (!book) {
                return res.status(404).send({ message: 'Book not found' });
            }
            res.status(200).send(book);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async getAll(req, res) {
        try {
            const response = await Book.find()
                .populate(authorProperty)
                .exec();
            if (!response) {
                return res.status(404).send({ message: 'Books not found' });
            }
            return res.send(response);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async create(req, res) {
        try {
            const book = new Book(req.body);
            const createdBookResponse = await Book.create(book);
            res.status(201).send(createdBookResponse)
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async update(req, res) {
        try {
            const { id, title, author, publisher, numberOfPages } = req.body;
            const bookToUpdate = { title, author, publisher, numberOfPages };

            const result = await Book.findByIdAndUpdate(
                id,
                bookToUpdate,
                { new: true }
            );
            if (!result) {
                return res.status(404).send({ message: 'book not found' });
            }
            return res.status(200).send(result);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params
            console.log(id);
            const response = await Book.deleteOne({ _id: id });
            console.log(response.deletedCount)
            if (response.deletedCount === 0) {
                res.status(400).send(`The book with id ${id} does not exist`);
            }
            return res.status(204).send(`The book with id ${id} has been deleted`);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

export default LivroController;