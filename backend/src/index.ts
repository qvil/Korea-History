import { GraphQLServer } from "graphql-yoga";
import data from "./data.json";

const typeDefs = `
  type King {
    title: String
    image: String
  }
  type Query {
    kings: [King]
  }
`;

const resolvers = {
  Query: {
    kings: () => data.data
  }
};

const options = { port: 4000 };
const server = new GraphQLServer({ typeDefs, resolvers });

server.start(options, () => {
  console.log(`🚀  Server ready at ${options.port}`);
});
