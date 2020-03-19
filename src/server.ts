import express from 'express';
import compression from "compression";
import cors from "cors";

import { ApolloServer } from "apollo-server-express";

import schema from './schema'
import { createServer } from 'http';

const PORT = 5300;

const app = express();

app.use('*', cors());

app.use(compression());

const server = new ApolloServer({
    schema: schema,
    introspection: true
});

server.applyMiddleware({ app });

const httpServer = createServer(app);

httpServer.listen(
    { port: PORT },
    () => console.log(`hello world, API GraphQL http://localhost:${PORT}/graphql`)
);
