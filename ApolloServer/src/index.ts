import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';
import { resolvers } from './resolvers.js';
import { CommandeDataSource } from './data_sources/commandes.js';
import { PaiementDataSource } from './data_sources/paiement.js';
import { ProduitsDataSource } from './data_sources/produits.js';

interface ContextValue {
  dataSources: {
    commandesAPI: CommandeDataSource;
  };
}

// we must convert the file Buffer to a UTF-8 string
const typeDefs = readFileSync('schema.graphql', 'utf8')

const server = new ApolloServer<ContextValue>({
    typeDefs,
    resolvers
  });

const { url } = await startStandaloneServer(server, {
  listen: { port: 4001 },
  context: async({req,res}) => {
    // 1) Get the user token from the headers.
    const token = req.headers.authorization || '';
    // Get the user token after "Bearer "
    const userId = token.split(' ')[1]; // e.g. "user-1"
    // // Initialize the userInfo object where the user's id and role will be stored
    // //    with a successful authentication
    // let userInfo = {};

    // if (userId) {
    //   // 2) Authenticate the user using the accounts API endpoint
    //   const { data } = await axios.get(`http://localhost:4011/login/${userId}`).catch((error) => {
    //     throw Error();
    //   });

    //   // 3) After a successful login, store the user's id and role
    //   //    in the userInfo object,
    //   //    which will be passed to `context` below for the resolvers to use
    //   userInfo = { userId: data.id, userRole: data.role };
    // }
    // // Add the user to the context
    return {
      dataSources: {
        commandesAPI: new CommandeDataSource(),
        paiementAPI: new PaiementDataSource(),
        produitsAPI: new ProduitsDataSource
      },
    };

  }
});
  
console.log(`🚀  Server ready at: ${url}`);