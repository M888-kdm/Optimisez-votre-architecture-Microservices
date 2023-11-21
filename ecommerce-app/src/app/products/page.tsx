import React from "react";
import ProductCard from "../components/product-card";
import { getClient } from "@/lib/apollo-client";
import { gql } from "@apollo/client";

const query = gql
            `query ProductList {
                produits {
                    titre
                    description
                    prix
                    image
                }
            }`;

export default async function Products() {

    // const client = getClient();
    // const { data } = await client.query({ query });

    const productList = [
        {titre: "Chaussures très jolies", description: "Ce sont de très jolies chaussures et à un coût réduit", prix: 5, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D"},
        {titre: "Chaussures très jolies", description: "Ce sont de très jolies chaussures et à un coût réduit", prix: 5, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D"},
        {titre: "Chaussures très jolies", description: "Ce sont de très jolies chaussures et à un coût réduit", prix: 5, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D"},
        {titre: "Chaussures très jolies", description: "Ce sont de très jolies chaussures et à un coût réduit", prix: 5, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D"},
        {titre: "Chaussures très jolies", description: "Ce sont de très jolies chaussures et à un coût réduit", prix: 5, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D"},
        {titre: "Chaussures très jolies", description: "Ce sont de très jolies chaussures et à un coût réduit", prix: 5, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D"},
        {titre: "Chaussures très jolies", description: "Ce sont de très jolies chaussures et à un coût réduit", prix: 5, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D"},
        {titre: "Chaussures très jolies", description: "Ce sont de très jolies chaussures et à un coût réduit", prix: 5, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D"},
        {titre: "Chaussures très jolies", description: "Ce sont de très jolies chaussures et à un coût réduit", prix: 5, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D"},
        {titre: "Chaussures très jolies", description: "Ce sont de très jolies chaussures et à un coût réduit", prix: 5, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D"},
        {titre: "Chaussures très jolies", description: "Ce sont de très jolies chaussures et à un coût réduit", prix: 5, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D"},
        {titre: "Chaussures très jolies", description: "Ce sont de très jolies chaussures et à un coût réduit", prix: 5, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D"},
        {titre: "Chaussures très jolies", description: "Ce sont de très jolies chaussures et à un coût réduit", prix: 5, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D"},
        {titre: "Chaussures très jolies", description: "Ce sont de très jolies chaussures et à un coût réduit", prix: 5, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D"},
    ];

    return (
        (productList?.map((item:any) => (
            <ProductCard data={item}/>
        )))
    );

}