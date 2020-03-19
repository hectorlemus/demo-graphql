import express from 'express';
import compression from "compression";
import cors from "cors";
import grapQLHTTP from 'express-graphql'

import schema from './schema'

const PORT = 5300;
const app = express();

app.use('*', cors());

app.use(compression());

app.use('/', grapQLHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(
    { port: PORT },
    () => console.log(`hello world, API GraphQL http://localhost:${PORT}/graphql`)
);
