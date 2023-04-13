const http = require("http")

const port = 3000;
const routes = {
    '/': 'Crso de node',
    '/livros': 'Pagina de livros',
    '/autores': 'Pagina de autores',
    '/editores': 'Pagina de editores',
    '/about': 'Project info'
}

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-type', 'text/plain');
    response.end(routes[request.url])
});

server.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
})