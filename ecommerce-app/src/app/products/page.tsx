"use client"

import React from "react";
import ProductCard from "../components/product-card";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";

const query = gql
        `query MyQuery {
            produits {
                id
                name
                image
                price
            }
        }`;

export const revalidate = 5;

export default function Products() {

    const { loading, error, data } = useQuery(query);

    if (loading){
        return
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
    }
    else if (error){
        return <p>Error: { error.message }</p>
    } 
    return (
        (data.produits?.map((item:any) => (
            <ProductCard data={item}/>
        )))
    );

    
}