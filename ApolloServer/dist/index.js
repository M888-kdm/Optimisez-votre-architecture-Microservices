import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';
import { resolvers } from './resolvers.js';
import { CommandeDataSource } from './data_sources/commandes.js';
import { PaiementDataSource } from './data_sources/paiement.js';
import { ProduitsDataSource } from './data_sources/produits.js';
import { AuthAPI } from './data_sources/auth.js';
import axios from 'axios';
// we must convert the file Buffer to a UTF-8 string
const typeDefs = readFileSync('schema.graphql', 'utf8');
const server = new ApolloServer({
    typeDefs,
    resolvers
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async ({ req, res }) => {
        let validation = false;

        // // Get the user token from the headers.
        // const token = req.headers.authorization || '';

        // //  If there is token
        // if (token) {
        //     try {
        //         const { data } = await axios.post('http://localhost:3000/tokenVerify', {
        //             accessToken: token,
        //         });
        //         const { message, isValid } = data;
        //         validation = isValid;
        //     }
        //     catch (error) {
        //         // Gérez les erreurs ici
        //         console.error('Erreur lors de la vérification du token', error);
        //         throw error;
        //     }
        // }
        return {
            validation,
            dataSources: {
                commandesAPI: new CommandeDataSource(),
                paiementAPI: new PaiementDataSource(),
                produitsAPI: new ProduitsDataSource(),
                authAPI: new AuthAPI()
            },
        };
    }
});

console.log(`🚀  Server ready at: ${url}`);
