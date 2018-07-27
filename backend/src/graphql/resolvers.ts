import { insertDocument, getDatabase } from "../database";
import config from "../config/config.json";

const DATABASE_NAME = config.DATABASE_NAME;
const COLLECTION_NAME = config.COLLECTION_NAME;

const resolvers = {
  Query: {
    kings: async () => await getDatabase(DATABASE_NAME, COLLECTION_NAME)
  },
  Mutation: {
    king: (_, { title, image }) =>
      insertDocument(DATABASE_NAME, COLLECTION_NAME, { title, image })
  }
};

export default resolvers;
