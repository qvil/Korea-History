const typeDefs = `
  type King {
    title: String
    image: String
  }
  type Query {
    kings: [King]
  }
  type Mutation {
    king(title: String, image: String): King
  }
`;

export default typeDefs;
