export const resolvers = {
    Query: {
        listeCommandes: async (_, __, { dataSources }) => {
            return dataSources.commandeAPI.getObjects();
        },
        getCommande: async (_, { id }, { dataSources }) => {
            return dataSources.commandeAPI.getObjectById(id);
        },
        produits: async (_, { id }, { dataSources }) => {
            return dataSources.produitsAPI.getProduits();
        },
        produitById: async (_, { id }, { dataSources }) => {
            return dataSources.produitsAPI.getProduitById(id);
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
    Commande: {
        product: async (parent, args, { dataSources }) => {
            const productId = parent.productId;
            return dataSources.produitAPI.getObjectById(productId);
        }
    },
    Paiement: {
        commande: async (parent, args, { dataSources }) => {
            const commandeId = parent.commandeId;
            return dataSources.commandeAPI.getObjectById(commandeId);
        }
    }
};
