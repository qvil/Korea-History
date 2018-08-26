import {
  insertDocument,
  getDatabase,
  updateDatabase,
  removeDatabase
} from "../database";
import config from "../config/config.json";

const DATABASE_NAME = config.database.DATABASE_NAME;
const COLLECTION_NAME = config.database.COLLECTION_NAME;

const resolvers = {
  Query: {
    kings: async () => await getDatabase(DATABASE_NAME, COLLECTION_NAME)
  },
  Mutation: {
    addKing: (_, { title, image, level, description }) =>
      insertDocument(DATABASE_NAME, COLLECTION_NAME, {
        title,
        image,
        level,
        description
      }),
    updateKing: (_, { title, document }) =>
      updateDatabase(DATABASE_NAME, COLLECTION_NAME, title, document),
    removeKing: (_, { title }) =>
      removeDatabase(DATABASE_NAME, COLLECTION_NAME, { title })
  }
};

export default resolvers;
