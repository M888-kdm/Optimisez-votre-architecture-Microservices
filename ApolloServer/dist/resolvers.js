export const resolvers = {
    Query: {
        listeCommandes: async (_, __, { dataSources }) => {
            return dataSources.commandeAPI.getObjects();
        },
        getCommande: async (_, { id }, { dataSources }) => {
            return dataSources.commandeAPI.getObjectById(id);
        },
        greeting: async (_, { id }, { dataSources }) => {
            return 'Hello Fama';
        },
    },
    Mutation: {
        createPaiement: async (_, { paiement }, { dataSources }) => {
            return dataSources.paiementAPI.create(paiement);
        },
        createCommande: async (_, { commande }, { dataSources }) => {
            return dataSources.commandesAPI.create(commande);
        }
    },
    // Commande: {
    //     produit: async(parent, args, { dataSources }) => {
    //         const productId = parent.productId;
    //         return dataSources.produitAPI.getObjectById(productId);
    //     }
    // },
    Paiement: {
        commande: async (parent, args, { dataSources }) => {
            const commandeId = parent.commandeId;
            return dataSources.commandeAPI.getObjectById(commandeId);
        }
    }
};
