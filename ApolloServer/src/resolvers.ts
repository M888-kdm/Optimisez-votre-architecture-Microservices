export const resolvers = {
    Query: {
        listeCommandes: async(_, __, {dataSources}) => {
            return dataSources.commandeAPI.getCommandes();
        },
        getCommande: async(_, { id }, {dataSources}) => {
            return dataSources.commandeAPI.getCommandeById(id);
        },
    },
    Mutation: {
      payerCommande: async(_, { paiement }, {dataSources}) => {
        return dataSources.paiementAPI.payerCommande(paiement);
      },
      faireCommande: async(_, { commande }, {dataSources}) => {
        return dataSources.commandeAPI.faireCommande(commande);
      }
    },
    Commande: {
        produit: async(parent, args, { dataSources }) => {
            const productId = parent.productId;
            return dataSources.produitAPI.getProductById(productId);
        }
    },
    Paiement: {
        commande: async(parent, args, { dataSources }) => {
          const commandeId = parent.commandeId;
          return dataSources.commandeAPI.getCommandeById(commandeId);
        }
    }
};