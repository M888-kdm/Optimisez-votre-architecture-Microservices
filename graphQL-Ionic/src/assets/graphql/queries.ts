import { gql } from "apollo-angular";

/**
 * @constant
 * @property GET_Products
 * @description    Uses a query to return all data from the products type of the GraphQL API
 */
const GET_PRODUITS = gql`
    query {
        produits{
            titre
            description
            image
            prix
        }
    }
`;


// const GET_PRODUITS = gql`
//     query listProduits{
//         produits {
//             nom
//             category
//             price
//             model number
//             about
//             product_specification
//             technical_details
//             weight
//             image
//             url
//             is_amazon_seller
//         }
//     }
// `;






const REGISTER_USER = gql`
    mutation register($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
        register(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
            id
            firstName
            lastName
            email
        }
    }
`

const LOGIN_USER = gql`
    mutation login( $email: String!, $password: String!) {
        login (email: $email, password: $password) {
            id
            firstName
            lastName
            email
            accessToken
        }
    }
`


/**
 * @exports
 * @description   Exports the query triggers for use within the application
 */
export {GET_PRODUITS,REGISTER_USER,LOGIN_USER}