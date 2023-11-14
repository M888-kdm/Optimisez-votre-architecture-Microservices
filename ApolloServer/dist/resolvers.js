import { GraphQLError } from "graphql";
export const resolvers = {
    Query: {
        listeCommandes: async (_, __, { dataSources }) => {
            return dataSources.commandesAPI.getObjects();
        },
        getCommande: async (_, { id }, { dataSources }) => {
            return dataSources.commandesAPI.getObjectById(id);
        },
        produits: async (_, { id }, { dataSources }) => {
            return dataSources.produitsAPI.getObjects();
        },
        produitById: async (_, { id }, { dataSources }) => {
            return dataSources.produitsAPI.getObjectById(id);
        },
    },
    Mutation: {
        createPaiement: async (_, { paiement }, { validation, dataSources }) => {
            if (validation) {
                return dataSources.paiementAPI.create(paiement);
            }
            throw new GraphQLError('UNAUTHORIZED', {
                extensions: {
                    code: 'UNAUTHORIZED',
                    http: { status: 401 },
                },
            });
        },
        createCommande: async (_, { commande }, { validation, dataSources }) => {
            if (validation) {
                return dataSources.commandesAPI.create(commande);
            }
            throw new GraphQLError('UNAUTHORIZED', {
                extensions: {
                    code: 'UNAUTHORIZED',
                    http: { status: 401 },
                },
            });
        },
        login: async (_, { email, password }, { dataSources }) => {
            return dataSources.authAPI.login(email, password);
        },
        register: async (_, { firstName, lastName, email, password }, { dataSources }) => {
            return dataSources.authAPI.register(firstName, lastName, email, password);
        }
    },
    Commande: {
        product: async (parent, args, { dataSources }) => {
            const productId = parent.productId;
            return dataSources.produitsAPI.getObjectById(productId);
        }
    },
    Paiement: {
        commande: async (parent, args, { dataSources }) => {
            const commandeId = parent.commandeId;
            return dataSources.commandesAPI.getObjectById(commandeId);
        }
    }
};
