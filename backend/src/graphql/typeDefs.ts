const typeDefs = `
  type King {
    title: String
    image: String
  }
  type Query {
    kings: [King]
  }
  type Mutation {
    addKing(title: String, image: String): King
    updateKing(title: String, document: String): King
  }
`;

export default typeDefs;
