const { ApolloServer, gql } = require("apollo-server-lambda");

const typeDefs = gql``;

const resolvers = {
   Query: {
      getvCard: (root, args, context) => {
         return [{}];
      },
   },

   Mutation: {
      addvCard: () => {
         return {};
      },
   },
};

const server = new ApolloServer({
   typeDefs,
   resolvers,
});

const handler = server.createHandler();

module.exports = { handler };
