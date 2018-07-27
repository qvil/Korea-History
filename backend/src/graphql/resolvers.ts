import { getDatabase, DATABASE_NAME, COLLECTION_NAME } from "../database";

const resolvers = {
  Query: {
    kings: async () => await getDatabase(DATABASE_NAME, COLLECTION_NAME)
  }
};

export default resolvers;
