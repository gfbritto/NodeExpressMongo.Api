import express from "express";
import booksRoutes from "./booksRoutes.js";
import authorsRoutes from "./authorsRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.redirect('/api-docs');
    });

    app.use(
        express.json(),
        booksRoutes,
        authorsRoutes
    );
};

export default routes;