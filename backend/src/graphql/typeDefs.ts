const typeDefs = `
  input king {
    title: String
    level: Int
    image: String
    description: String
  }
  type King {
    title: String
    level: Int
    image: String
    description: String
  }
  type Query {
    kings: [King]
  }
  type Mutation {
    addKing(title: String, image: String, level: Int, description: String): King
    updateKing(title: String!, king: king): King
    removeKing(title: String): King
  }
`;

export default typeDefs;
