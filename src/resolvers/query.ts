import { IResolvers } from "graphql-tools";

const query : IResolvers = {
    Query : {
        hello(): String {
            return "Hello world!";
        },
        helloWithName(__: void, { name }): String {
            return `Hello ${name}`;
        }
    }
}

export default query;