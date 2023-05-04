import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        id: {type: String},
        title: {type: String, required: true},
        author: {type: String, required: true},
        publisher: {type: String, required: true},
        numberOfPages: {type: Number},
    }
);

const books = mongoose.model('books', bookSchema);

export default books;