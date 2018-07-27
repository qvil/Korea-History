import { GraphQLServer } from "graphql-yoga";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
import { insertDocument, getDatabase } from "./database";

// insertDocument("koreahistory", "joseon", { b: 2 });
getDatabase("koreahistory", "joseon").then(resolve => {
  console.log(resolve);
});

const options = { port: 4000 };
const server = new GraphQLServer({ typeDefs, resolvers });

server.start(options, () => {
  console.log(`🚀  Server ready at ${options.port}`);
});
