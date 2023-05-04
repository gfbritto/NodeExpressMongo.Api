import books from "../models/Book.js";

class LivroController {
    static async getAll(req, res) {
        try {
            const response = await books.find();
            console.log(response);
            return res.send(response);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async create(req, res) {
        try {
            const book = new book(req.body);
            const createdBookResponse = await books.create(book);
            res.status(201).send(createdBookResponse)
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

export default LivroController;