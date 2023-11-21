import ProductDetails from "./product-details";

const ProductCard = ({ data }: any) => {

    return(
        <div className="col my-3">
            <div className="card border-0">
                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..."/>
                <div className="card-body ps-0">
                    <div className="d-flex justify-content-between">
                        <h6 className="card-title">{data.titre}</h6>
                        <h5 className="fw-bold">{data.prix}$</h5>
                    </div>
                    <p className="card-text text-secondary">{data.description}</p>
                    <ProductDetails data={data}/>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;