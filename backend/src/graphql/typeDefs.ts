const typeDefs = `
  type King {
    title: String
    image: String
  }
  type Query {
    kings: [King]
  }
`;

export default typeDefs;
