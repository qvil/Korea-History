import { ApolloServer, gql } from "apollo-server";
import data from "./data.json";

const typeDefs = gql`
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

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
