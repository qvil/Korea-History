import { GraphQLServer } from "graphql-yoga";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
import mongodb from "mongodb";
import config from "./config/config.json";

const id = config.id;
const password = config.password;
const MongoClient = mongodb.MongoClient;

var uri = `mongodb+srv://${id}:${password}@cluster0-jiiuz.mongodb.net/test?retryWrites=true`;

MongoClient.connect(
  uri,
  (err, client: any) => {
    const collection = client.db("koreahistory").collection("joseon");
    // perform actions on the collection object
    collection.find({}).toArray((err, result: any) => {
      if (err) {
        console.error(err);
      }

      console.log(result);
      client.close();
    });
  }
);

const options = { port: 4000 };
const server = new GraphQLServer({ typeDefs, resolvers });

server.start(options, () => {
  console.log(`🚀  Server ready at ${options.port}`);
});
