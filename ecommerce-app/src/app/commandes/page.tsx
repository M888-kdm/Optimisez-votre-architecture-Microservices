import { gql } from "@apollo/client";

const query = gql
            `query ProductList {
                listeCommandes {
                    quantite
                    commandePayee
                    product
                    dateCommande
                }
            }`;

export default async function CommandeList(){

    return(
        <>
        </>
    )
}