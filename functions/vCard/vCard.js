const { ApolloServer, gql } = require("apollo-server-lambda");

const typeDefs = gql`
   type Query {
      getvCard: [Card!]
   }

   type Card {
      name: String!
   }

   type vCrad {
      c1: String!
      c2: String!
      c3: String!
      rec: String!
      sender: String!
      msg: String!
   }
   type Mutation {
      addvCard(
         c1: String!
         c2: String!
         c3: String!
         rec: String!
         msg: String!
         sender: String!
      ): vCard
   }
`;

const name1 = { name: "Ashan" };

const resolvers = {
   Query: {
      getvCard: (root, args, context) => {
         return name1;
      },
   },

   Mutation: {
      addvCard: (_, { c1, c2, c3, rec, sender, msg }) => {
         console.log("==========================");

         console.log(c1, c2, c3, rec, sender, msg);

         console.log("==========================");

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
