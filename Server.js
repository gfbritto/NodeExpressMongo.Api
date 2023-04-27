import app from './src/app.js'

import { readFileSync } from 'fs';
import { load } from 'js-yaml';

// import swagger ui and swagger file
import swaggerUi from 'swagger-ui-express';
const swaggerFile = load(readFileSync('./swagger/swagger.yaml', 'utf8'));


const port = process.env.PORT || 3000;

// add swagger docs
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerFile) 
);

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
})

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))