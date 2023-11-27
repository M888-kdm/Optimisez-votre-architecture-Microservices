import Link from "next/link"
import Image from "next/image";

const ProductCard = ({ data }: any) => {

    return(
        <div className="col my-3">
            <div className="card border-0">
                <Image src={`${data.image}`} className="border rounded-3" width={1000} height={1000} style={{ width: "100%", height: 300, objectFit: 'cover'}} alt="."/>
                <div className="card-body ps-0">
                    <div className="justify-content-between mb-3">
                        <h6 className="card-title fs-6 text-secondary">{data.name}</h6>
                        <h6 className="fw-bold">{data.price}</h6>
                    </div>
                    <Link href={{ pathname: `/details/${data.id}` }}>
                        <button className="btn border w-100 rounded-3 bg-dark text-white">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;