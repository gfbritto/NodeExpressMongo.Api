import Author from '../models/Author.js';

class AuthorsController {
    static async getById(req, res) {
        try {
            const { id } = req.params;
            const author = await Author.findById(id);
            if (!author) {
                return res.status(404).send({ message: 'Author not found' });
            }
            res.status(200).send(author);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async getAll(req, res) {
        try {
            const response = await Author.find();
            console.log(response);
            return res.send(response);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async create(req, res) {
        try {
            const author = new Author(req.body);
            const createdAuthorResponse = await Author.create(author);
            res.status(201).send(createdAuthorResponse)
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async update(req, res) {
        try {
            const { id, name, nationality } = req.body;
            const authorToUpdate = { name, nationality };

            const result = await Author.findByIdAndUpdate(
                id,
                authorToUpdate,
                { new: true }
            );
            if (!result) {
                return res.status(404).send({ message: 'author not found' });
            }
            return res.status(200).send(result);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params
            const response = await Author.deleteOne({ _id: id });

            if (response.deletedCount === 0) {
                res.status(400).send(`The author with id ${id} does not exist`);
            }
            return res.status(204).send(`The author with id ${id} has been deleted`);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

export default AuthorsController;