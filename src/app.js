import express from "express";

const app = express();

app.use(express.json());

const books = [
    {
        id: 1, "title": "O senhor dos aneis",
        id: 2, "title": "O hobbit",
    }
]

app.get('/', (req, res) => {
    res.redirect('/api-docs');
})

app.get('/books', (req, res) => {
    res.status(200).json(books);
})

app.post('/books', (req, res) => {
    books.push(req.body);
    res.status(201).send('The book has been created')
})

app.put('/books/:id', (req, res) => {
    const bookIndex = findBookIndexById(req.params.id);
    books[bookIndex].title = req.body.title;
    return res.json(books[bookIndex]);
})

app.delete('/books/:id', (req, res) => {
    try {
        const { id } = req.params
        const bookIndex = findBookIndexById(id);
        books.splice(bookIndex, 1);
        return res.status(204).send(`The book with id ${id} has been deleted`);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

const findBookIndexById = (id) => {
    return books.findIndex(book => book.id == id);
}
export default app;