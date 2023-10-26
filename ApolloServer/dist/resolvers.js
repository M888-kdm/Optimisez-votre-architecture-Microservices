// export const resolvers = {
//     Query: {
//         listeCommandes: async(_, __, {dataSources}) => {
//             return dataSources.commandeAPI.getCommandes();
//         },
//         getCommande: async(_, { id }, {dataSources}) => {
//             return dataSources.commandeAPI.getCommandeById(id);
//         }
//     },
//     Commande: {
//         produit: async(parent, args, { dataSources }) => {
//             const productId = parent.productId;
//             return dataSources.produitAPI.getProductById(productId);
//         }
//     }
// };
export const resolvers = {
    Query: {
        hello: () => "Hello World !",
    },
};
