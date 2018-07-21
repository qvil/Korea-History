import data from "../data.json";

const resolvers = {
  Query: {
    kings: () => data.data
  }
};

export default resolvers;
