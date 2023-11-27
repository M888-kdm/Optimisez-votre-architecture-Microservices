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
        {
            "id": 150,
            "name": "Medieval Princess Fuschia Child Costume",
            "category": "Clothing, Shoes & Jewelry | Costumes & Accessories | Women | Costumes & Cosplay Apparel | Costumes",
            "price": "$22.50 - $49.88",
            "model": null,
            "about": "Rule strict but fair in this Medieval Princess Fuschia Child Costume. Costume includes dress, crown, and belt. Does not include shoes.",
            "productSpecification": null,
            "technicalDetails": "show up to 2 reviews by default Put your little girl on a pedestal this Halloween with the Medieval Princess Fuschia Child Costume. The ensemble comes complete with a flowing gown, jewel-encrusted crown, and ornately decorated belt to transform your little one into the princess you've always known she was. Add on accessories like a scepter and sparkly shoes to accentuate the features of this gorgeous piece or keep it as is. Either way, you'll get everything necessary to give your kid an authentic princess experience. And isn't that what playing dress up is all about?",
            "weight": "2 pounds",
            "image": "https://images-na.ssl-images-amazon.com/images/I/41TBtiz3qJL.jpg|https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg",
            "url": "https://www.amazon.com/California-Costumes-00572-Medieval-Princess/dp/B01L4OS81I",
            "isAmazonSeller": "Y"
        },
        {
            "id": 150,
            "name": "Medieval Princess Fuschia Child Costume",
            "category": "Clothing, Shoes & Jewelry | Costumes & Accessories | Women | Costumes & Cosplay Apparel | Costumes",
            "price": "$22.50 - $49.88",
            "model": null,
            "about": "Rule strict but fair in this Medieval Princess Fuschia Child Costume. Costume includes dress, crown, and belt. Does not include shoes.",
            "productSpecification": null,
            "technicalDetails": "show up to 2 reviews by default Put your little girl on a pedestal this Halloween with the Medieval Princess Fuschia Child Costume. The ensemble comes complete with a flowing gown, jewel-encrusted crown, and ornately decorated belt to transform your little one into the princess you've always known she was. Add on accessories like a scepter and sparkly shoes to accentuate the features of this gorgeous piece or keep it as is. Either way, you'll get everything necessary to give your kid an authentic princess experience. And isn't that what playing dress up is all about?",
            "weight": "2 pounds",
            "image": "https://images-na.ssl-images-amazon.com/images/I/41TBtiz3qJL.jpg|https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg",
            "url": "https://www.amazon.com/California-Costumes-00572-Medieval-Princess/dp/B01L4OS81I",
            "isAmazonSeller": "Y"
        },
        {
            "id": 150,
            "name": "Medieval Princess Fuschia Child Costume",
            "category": "Clothing, Shoes & Jewelry | Costumes & Accessories | Women | Costumes & Cosplay Apparel | Costumes",
            "price": "$22.50 - $49.88",
            "model": null,
            "about": "Rule strict but fair in this Medieval Princess Fuschia Child Costume. Costume includes dress, crown, and belt. Does not include shoes.",
            "productSpecification": null,
            "technicalDetails": "show up to 2 reviews by default Put your little girl on a pedestal this Halloween with the Medieval Princess Fuschia Child Costume. The ensemble comes complete with a flowing gown, jewel-encrusted crown, and ornately decorated belt to transform your little one into the princess you've always known she was. Add on accessories like a scepter and sparkly shoes to accentuate the features of this gorgeous piece or keep it as is. Either way, you'll get everything necessary to give your kid an authentic princess experience. And isn't that what playing dress up is all about?",
            "weight": "2 pounds",
            "image": "https://images-na.ssl-images-amazon.com/images/I/41TBtiz3qJL.jpg|https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg",
            "url": "https://www.amazon.com/California-Costumes-00572-Medieval-Princess/dp/B01L4OS81I",
            "isAmazonSeller": "Y"
        },        
        {
            "id": 150,
            "name": "Medieval Princess Fuschia Child Costume",
            "category": "Clothing, Shoes & Jewelry | Costumes & Accessories | Women | Costumes & Cosplay Apparel | Costumes",
            "price": "$22.50 - $49.88",
            "model": null,
            "about": "Rule strict but fair in this Medieval Princess Fuschia Child Costume. Costume includes dress, crown, and belt. Does not include shoes.",
            "productSpecification": null,
            "technicalDetails": "show up to 2 reviews by default Put your little girl on a pedestal this Halloween with the Medieval Princess Fuschia Child Costume. The ensemble comes complete with a flowing gown, jewel-encrusted crown, and ornately decorated belt to transform your little one into the princess you've always known she was. Add on accessories like a scepter and sparkly shoes to accentuate the features of this gorgeous piece or keep it as is. Either way, you'll get everything necessary to give your kid an authentic princess experience. And isn't that what playing dress up is all about?",
            "weight": "2 pounds",
            "image": "https://images-na.ssl-images-amazon.com/images/I/41TBtiz3qJL.jpg|https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg",
            "url": "https://www.amazon.com/California-Costumes-00572-Medieval-Princess/dp/B01L4OS81I",
            "isAmazonSeller": "Y"
        },
        {
            "id": 150,
            "name": "Medieval Princess Fuschia Child Costume",
            "category": "Clothing, Shoes & Jewelry | Costumes & Accessories | Women | Costumes & Cosplay Apparel | Costumes",
            "price": "$22.50 - $49.88",
            "model": null,
            "about": "Rule strict but fair in this Medieval Princess Fuschia Child Costume. Costume includes dress, crown, and belt. Does not include shoes.",
            "productSpecification": null,
            "technicalDetails": "show up to 2 reviews by default Put your little girl on a pedestal this Halloween with the Medieval Princess Fuschia Child Costume. The ensemble comes complete with a flowing gown, jewel-encrusted crown, and ornately decorated belt to transform your little one into the princess you've always known she was. Add on accessories like a scepter and sparkly shoes to accentuate the features of this gorgeous piece or keep it as is. Either way, you'll get everything necessary to give your kid an authentic princess experience. And isn't that what playing dress up is all about?",
            "weight": "2 pounds",
            "image": "https://images-na.ssl-images-amazon.com/images/I/41TBtiz3qJL.jpg|https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg",
            "url": "https://www.amazon.com/California-Costumes-00572-Medieval-Princess/dp/B01L4OS81I",
            "isAmazonSeller": "Y"
        },
        {
            "id": 150,
            "name": "Medieval Princess Fuschia Child Costume",
            "category": "Clothing, Shoes & Jewelry | Costumes & Accessories | Women | Costumes & Cosplay Apparel | Costumes",
            "price": "$22.50 - $49.88",
            "model": null,
            "about": "Rule strict but fair in this Medieval Princess Fuschia Child Costume. Costume includes dress, crown, and belt. Does not include shoes.",
            "productSpecification": null,
            "technicalDetails": "show up to 2 reviews by default Put your little girl on a pedestal this Halloween with the Medieval Princess Fuschia Child Costume. The ensemble comes complete with a flowing gown, jewel-encrusted crown, and ornately decorated belt to transform your little one into the princess you've always known she was. Add on accessories like a scepter and sparkly shoes to accentuate the features of this gorgeous piece or keep it as is. Either way, you'll get everything necessary to give your kid an authentic princess experience. And isn't that what playing dress up is all about?",
            "weight": "2 pounds",
            "image": "https://images-na.ssl-images-amazon.com/images/I/41TBtiz3qJL.jpg|https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg",
            "url": "https://www.amazon.com/California-Costumes-00572-Medieval-Princess/dp/B01L4OS81I",
            "isAmazonSeller": "Y"
        },
        {
            "id": 150,
            "name": "Medieval Princess Fuschia Child Costume",
            "category": "Clothing, Shoes & Jewelry | Costumes & Accessories | Women | Costumes & Cosplay Apparel | Costumes",
            "price": "$22.50 - $49.88",
            "model": null,
            "about": "Rule strict but fair in this Medieval Princess Fuschia Child Costume. Costume includes dress, crown, and belt. Does not include shoes.",
            "productSpecification": null,
            "technicalDetails": "show up to 2 reviews by default Put your little girl on a pedestal this Halloween with the Medieval Princess Fuschia Child Costume. The ensemble comes complete with a flowing gown, jewel-encrusted crown, and ornately decorated belt to transform your little one into the princess you've always known she was. Add on accessories like a scepter and sparkly shoes to accentuate the features of this gorgeous piece or keep it as is. Either way, you'll get everything necessary to give your kid an authentic princess experience. And isn't that what playing dress up is all about?",
            "weight": "2 pounds",
            "image": "https://images-na.ssl-images-amazon.com/images/I/41TBtiz3qJL.jpg|https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg",
            "url": "https://www.amazon.com/California-Costumes-00572-Medieval-Princess/dp/B01L4OS81I",
            "isAmazonSeller": "Y"
        },
        {
            "id": 150,
            "name": "Medieval Princess Fuschia Child Costume",
            "category": "Clothing, Shoes & Jewelry | Costumes & Accessories | Women | Costumes & Cosplay Apparel | Costumes",
            "price": "$22.50 - $49.88",
            "model": null,
            "about": "Rule strict but fair in this Medieval Princess Fuschia Child Costume. Costume includes dress, crown, and belt. Does not include shoes.",
            "productSpecification": null,
            "technicalDetails": "show up to 2 reviews by default Put your little girl on a pedestal this Halloween with the Medieval Princess Fuschia Child Costume. The ensemble comes complete with a flowing gown, jewel-encrusted crown, and ornately decorated belt to transform your little one into the princess you've always known she was. Add on accessories like a scepter and sparkly shoes to accentuate the features of this gorgeous piece or keep it as is. Either way, you'll get everything necessary to give your kid an authentic princess experience. And isn't that what playing dress up is all about?",
            "weight": "2 pounds",
            "image": "https://images-na.ssl-images-amazon.com/images/I/41TBtiz3qJL.jpg|https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg",
            "url": "https://www.amazon.com/California-Costumes-00572-Medieval-Princess/dp/B01L4OS81I",
            "isAmazonSeller": "Y"
        },
        {
            "id": 150,
            "name": "Medieval Princess Fuschia Child Costume",
            "category": "Clothing, Shoes & Jewelry | Costumes & Accessories | Women | Costumes & Cosplay Apparel | Costumes",
            "price": "$22.50 - $49.88",
            "model": null,
            "about": "Rule strict but fair in this Medieval Princess Fuschia Child Costume. Costume includes dress, crown, and belt. Does not include shoes.",
            "productSpecification": null,
            "technicalDetails": "show up to 2 reviews by default Put your little girl on a pedestal this Halloween with the Medieval Princess Fuschia Child Costume. The ensemble comes complete with a flowing gown, jewel-encrusted crown, and ornately decorated belt to transform your little one into the princess you've always known she was. Add on accessories like a scepter and sparkly shoes to accentuate the features of this gorgeous piece or keep it as is. Either way, you'll get everything necessary to give your kid an authentic princess experience. And isn't that what playing dress up is all about?",
            "weight": "2 pounds",
            "image": "https://images-na.ssl-images-amazon.com/images/I/41TBtiz3qJL.jpg|https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg",
            "url": "https://www.amazon.com/California-Costumes-00572-Medieval-Princess/dp/B01L4OS81I",
            "isAmazonSeller": "Y"
        },
    ];

    return (
        (productList?.map((item:any) => (
            <ProductCard data={item}/>
        )))
    );

}