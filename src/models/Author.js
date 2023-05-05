import mongoose from "mongoose";

import { authorsCollection } from "../config/dbCollections.js";

const authorSchema = mongoose.Schema(
    {
        id: { type: String },
        name: { type: String, required: true },
        nationality: { type: String, required: true },
    },
    {
        versionKey: false
    }
);

const Authors = mongoose.model(authorsCollection, authorSchema);

export default Authors;