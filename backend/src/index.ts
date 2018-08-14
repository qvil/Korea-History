import { GraphQLServer } from "graphql-yoga";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
import Koa from "koa";
// import config from "src/config/config.json";
import config from "./config/config.json";
import serve from "koa-static";


const app = new Koa();

app.use(async ctx => {
  ctx.body = "Hello World";
});

// app.use(serve(__dirname + "/build"));
app.use(serve("./build"));

app.listen(config.server.koa.port);

const options = { port: config.server.graphql.port };
const server = new GraphQLServer({ typeDefs, resolvers });

server.start(options, () => {
  console.log(`🚀  Server ready at ${options.port}`);
});
