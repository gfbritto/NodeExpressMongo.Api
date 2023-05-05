import mongoose from "mongoose";

const connectionString = "";
mongoose.connect(connectionString);

let db = mongoose.connection;

export default db;