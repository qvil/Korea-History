import { GraphQLServer } from "graphql-yoga";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
import mongodb from "mongodb";
import { id, password } from "./config/config.json";

const MongoClient = mongodb.MongoClient;

var uri = `mongodb+srv://${id}:${password}@cluster0-jiiuz.mongodb.net/test?retryWrites=true`;
// var uri = `mongodb+srv://TaesuHyeon:${password}@cluster0-jiiuz.mongodb.net/test?retryWrites=true`;
// var uri = `mongodb://${id}:${password}@cluster0-shard-00-00-jiiuz.mongodb.net:27017,cluster0-shard-00-01-jiiuz.mongodb.net:27017,cluster0-shard-00-02-jiiuz.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true`;
// MongoClient.connect(
//   uri,
//   function(err, db) {
//     console.log(db);
//     db.close();
//   }
// );

MongoClient.connect(
  uri,
  function(err, client) {
    // console.log(client);
    const collection = client.db("koreahistory").collection("devices");
    // perform actions on the collection object
    console.log(collection);
    client.close();
  }
);

const options = { port: 4000 };
const server = new GraphQLServer({ typeDefs, resolvers });

server.start(options, () => {
  console.log(`🚀  Server ready at ${options.port}`);
});
