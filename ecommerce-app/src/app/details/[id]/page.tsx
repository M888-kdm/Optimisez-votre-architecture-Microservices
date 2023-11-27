"use client";

import { gql } from "@apollo/client";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";

const query = gql
        `query ProduitById {
            produitById(id: 1) {
                id
                name
                category
                price
                model
                about
                productSpecification
                technicalDetails
                weight
                image
                url
                isAmazonSeller
            }
        }`;

export default function ProductDetails({ params }: { params: { id: string }}){

    const { loading, error, data } = useQuery(query);
    
    if(loading) return <center>Loading...</center>
    else if(error) {
        return <p>{error.message}</p>
    } 
    else {
        var product = data.produitById
        return(
            <div className="container-fluid pt-4 justify">
                <div className="row product-details-wrapper">
                    <div className="col-5 h-100 d-flex">
                        <img src={product.image} className="img img-fluid modal-img m-auto" alt="..."/>
                    </div>
                    <div className="col-7 d-flex flex-column px-5">
                        <h3>{product.name}</h3>
                        <h3 className="mt-1 fw-bold">{product.price}</h3>
                        <div className="about mt-4">
                            <h5 className="fw-bold">About the product</h5>
                            <ul className="mt-2 mb-0">
                                {product.about?.split("|").map((line: any, index: any) => (
                                    <li key={product.id}>{line}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="categories mt-4">
                            <h5 className="fw-bold">Categories</h5>
                            <p className="mt-2 mb-0">{product.category?.split(" |").join(",")}</p>
                        </div>
                    </div>
                </div>
                <div className="row description my-3 p-5 bg-dark text-white">
                    <h4 className="fw-bold">Product Description</h4>
                    <p className="mt-2 mb-0 bg-dark text-white">{product.technicalDetails}</p>
                </div>
                <div className="container-fluid py-4 px-5">
                    <h4 className="fw-bold mb-4">Product Specifications</h4>
                    <table className="table">
                        <tbody>
                            {product.productSpecification?.split("|").map((item: any, index: any) => (
                                <tr>
                                    <td className="fw-bold">{item.split(":")[0]}</td>
                                    <td>{item.split(":")[1]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}