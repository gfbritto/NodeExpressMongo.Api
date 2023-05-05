import mongoose from "mongoose";

import { authorsCollection } from "../config/dbCollections.js";

const bookSchema = mongoose.Schema(
    {
        id: { type: String },
        title: { type: String, required: true },
        author: { type: mongoose.Schema.Types.ObjectId, ref: authorsCollection, required: true },
        publisher: { type: String, required: true },
        numberOfPages: { type: Number },
    }
);

const Books = mongoose.model('books', bookSchema);

export default Books;