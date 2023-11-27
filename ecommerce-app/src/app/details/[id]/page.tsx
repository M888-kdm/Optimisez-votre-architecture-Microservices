"use client";

import { useRouter } from "next/navigation";

export default function ProductDetails({ params }: { params: { id: string }}){

    const data = {
        "id": 5,
        "name": "Terra by Battat – 4 Dinosaur Toys, Medium – Dinosaurs for Kids & Collectors, Scientifically Accurate & Designed by A Paleo-Artist; Age 3+ (4 Pc)",
        "category": "Baby Products | Nursery | Décor | Wall Décor | Growth Charts",
        "price": "$18.66",
        "model": "AN4054Z",
        "about": "Make sure this fits by entering your model number. | 4 medium-sized dinosaurs for kids, with lifelike pose, accurate ratio, and exquisitely detailed paint | Includes: Parasaurolophus walkeri, Stegosaurus ungulatus, Pachyrhinosaurus, and euoplocephalus tutus toy dinos | Museum Quality: classic toy dinosaurs designed by an internationally renowned paleo-artist | Educational toy: dinosaur toys for kids spark curiosity about paleontology, science, and natural History | Dimensions: Dimensions: miniature figurines measure 6.25-8.5 (L) 1.5-2.25 (W) 2.25-3.5 (H) inches approximately toys 6.25-8.5 (L) 1.5-2.25 (W) 2.25-3.5 (H) inches approximately | No batteries required, just imagination! | Earth-friendly recyclable packaging | Age: suggested for ages 3+ | Collect them all! Discover the entire Terra by Battat family of animal toy figurines and dinosaur playsets!",
        "productSpecification": "ProductDimensions:8.7x3.9x3.4inches|ItemWeight:15.8ounces|ShippingWeight:1.4pounds(Viewshippingratesandpolicies)|ASIN:B07PF1R8LS|Itemmodelnumber:AN4054Z|Manufacturerrecommendedage:36months-10years",
        "technicalDetails": "Go to your orders and start the return Select the ship method Ship it! | Go to your orders and start the return Select the ship method Ship it! | show up to 2 reviews by default Look out! Here come 4 incredible dinosaur toys that look like the real thing! Sought after by both kids and collectors, These scientifically precise and very collectable dinosaur replicas also feature bright, beautiful colors and look amazing in any dinosaur playset. And, they're made with high quality material, so these dinos will never go extinct! The intimidating-looking, and instantly recognizable Stegosaurus was the largest of plate-backed prehistoric herbivores. Scientists have suggested that the Stegosaurus’ iconic plates were for defense against predators, but this is unlikely as the plates were quite thin. Others have said the Stegosaurus’ spiked tail may have been used as a weapon. Terra’s Stegosaurus toy accurately recreates the formidable size and terrifying presence of this iconic predator. In particular, the large, heavily built frame and rounded backs of the mighty Stegosaurus are faithfully depicted in the dinosaur replica. This highly collectable playset also includes a toy Parasaurolophus, Stegosaurus, Pachyrhinosaurus, and euoplocephalus tutus. Collect your own miniature versions of 4 powerful and iconic dinosaurs from Terra by Battat! | 1.4 pounds (View shipping rates and policies)",
        "weight": "1.4 pounds",
        "image": "https://images-na.ssl-images-amazon.com/images/I/41EdPcg0uzL.jpg|https://images-na.ssl-images-amazon.com/images/I/410KcPi9ieL.jpg|https://images-na.ssl-images-amazon.com/images/I/41wU2y7soKL.jpg|https://images-na.ssl-images-amazon.com/images/I/51NIuTiNR1L.jpg|https://images-na.ssl-images-amazon.com/images/I/41lqmJ8s-EL.jpg|https://images-na.ssl-images-amazon.com/images/I/41mJemzRLAL.jpg|https://images-na.ssl-images-amazon.com/images/I/61kyhPnISgL.jpg|https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg",
        "url": "https://www.amazon.com/Terra-Battat-Dinosaurs-Collectable-Stegosaurus/dp/B07PF1R8LS",
        "isAmazonSeller": "Y"
    }

    return(
        <div className="container-fluid pt-4 justify">
            <div className="row product-details-wrapper">
                <div className="col-5 h-100 d-flex">
                    <img src={data.image} className="img img-fluid modal-img m-auto" alt="..."/>
                </div>
                <div className="col-7 d-flex flex-column px-5">
                    <h3>{data.name}</h3>
                    <h3 className="mt-1 fw-bold">{data.price}</h3>
                    <div className="about mt-4">
                        <h5 className="fw-bold">About the product</h5>
                        <ul className="mt-2 mb-0">
                            {data.about.split("|").map((line, index) => (
                                <li key={data.id}>{line}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="categories mt-4">
                        <h5 className="fw-bold">Categories</h5>
                        <p className="mt-2 mb-0">{data.category.split(" |").join(",")}</p>
                    </div>
                </div>
            </div>
            <div className="row description my-3 p-5 bg-dark text-white">
                <h4 className="fw-bold">Product Description</h4>
                <p className="mt-2 mb-0 bg-dark text-white">{data.technicalDetails}</p>
            </div>
            <div className="container-fluid py-4 px-5">
                <h4 className="fw-bold mb-4">Product Specifications</h4>
                <table className="table">
                    <tbody>
                        {data.productSpecification.split("|").map((item: any, index: any) => (
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