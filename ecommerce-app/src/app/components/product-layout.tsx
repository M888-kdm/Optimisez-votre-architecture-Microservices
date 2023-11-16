import ProductCard from "./product-card";

export default function ProductList(){

    const productList: any = [];

    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
            {productList.map((item: Object, index: number) => {
                
            })}
        </div>
    )
}