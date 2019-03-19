import { ApolloServer, gql } from 'apollo-server-lambda';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: (root: any, args: any, context: any) => {
      return "Hello, world!";
    }
  }
};

const server = new ApolloServer({
  introspection: true, //shows the Schema help
  playground: true,
  typeDefs,
  resolvers
});

exports.handler = server.createHandler();