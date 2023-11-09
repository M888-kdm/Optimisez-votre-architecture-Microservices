import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';
import { resolvers } from './resolvers.js';
import { CommandeDataSource } from './data_sources/commandes.js';
import { PaiementDataSource } from './data_sources/paiement.js';
import { ProduitsDataSource } from './data_sources/produits.js';
// we must convert the file Buffer to a UTF-8 string
const typeDefs = readFileSync('schema.graphql', 'utf8');
const server = new ApolloServer({
    typeDefs,
    resolvers
});
const { url } = await startStandaloneServer(server, {
    context: async () => {
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
