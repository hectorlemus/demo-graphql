import express from 'express';
import compression from "compression";
import cors from "cors";
import grapQLHTTP from 'express-graphql'

import { IResolvers, makeExecutableSchema } from "graphql-tools";
import { GraphQLSchema } from 'graphql';

const PORT = 5300;
const app = express();

const typeDefs = `
    type Query {
        hello: String!
        helloWithName(name: String!): String!
    }
`;

const resolvers : IResolvers = {
    Query : {
        hello(): String {
            return "Hello world";
        },
        helloWithName(__: void, { name }): String {
            return `Hello ${name}`;
        }
    }
}

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs, resolvers
}); 

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
