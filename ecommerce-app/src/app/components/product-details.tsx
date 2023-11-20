import { width } from "@fortawesome/free-solid-svg-icons/fa0";

const ProductDetails = ({ data }: any) => {
    return (
        <>
            <button className="btn border rounded-3 bg-dark text-white" data-bs-toggle="modal" data-bs-target="#exampleModal">Learn More</button>
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content h-100">
                    <div className="modal-body h-100">
                        <div className="row h-100">
                            <div className="w-50 h-100">
                                <img src={data.image} className="img img-fluid modal-img" alt="..."/>
                            </div>
                            <div className="w-50 d-flex flex-column">
                                <h3 className="fw-bold">{data.titre}</h3>
                                <p className="mt-2 mb-0">{data.description}</p>
                                <h3 className="mt-3 fw-bold">{data.prix}$</h3>
                                <form className="mb-3">
                                    <div className="form-group">
                                        <label className="fw-bold">Quantité</label>
                                        <input type="number" className="form-control w-50 bg-light" placeholder=""/>
                                    </div>
                                </form>
                                <button className="btn border rounded-3 bg-dark text-white py-2 mt-auto align-self-start w-75">Commander</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default ProductDetails;