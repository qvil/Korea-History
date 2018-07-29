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
    updateKing(title: String, modifyTitle: String, image: String): King
  }
`;

export default typeDefs;
