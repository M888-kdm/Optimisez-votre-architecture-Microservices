export const resolvers = {
    Query: {
      listeCommandes: async(_, __, { dataSources }) => {
          return dataSources.commandesAPI.getObjects();
      },
      getCommande: async(_, { id }, { dataSources }) => {
          return dataSources.commandesAPI.getObjectById(id);
      },
      produits: async(_, { id }, { dataSources }) => {
          return dataSources.produitsAPI.getObjects()
      },
      produitById: async(_, { id }, { dataSources }) =>{
          return dataSources.produitsAPI.getObjectById(id)
      },
    },
    Mutation: {
      createPaiement: async(_, { paiement }, { dataSources }) => {
        return dataSources.paiementAPI.create(paiement);
      },
      createCommande: async(_, { commande }, { dataSources }) => {
        return dataSources.commandesAPI.create(commande);
      }
    },
    Commande: {
      product: async(parent, args, { dataSources }) => {
          const productId = parent.productId;
          return dataSources.produitsAPI.getObjectById(productId);
      }
    },
    Paiement: {
      commande: async(parent, args, { dataSources }) => {
        const commandeId = parent.commandeId;
        return dataSources.commandesAPI.getObjectById(commandeId);
      }
    }
};