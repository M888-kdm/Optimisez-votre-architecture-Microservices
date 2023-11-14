import styles from '../page.module.css'

export default function Carousel(){
    return (
        <div id="carousel" className={`${styles.carousel} carousel slide bg-dark`}>
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner h-100">
                <div className="carousel-item active h-100">
                    <img src="/images/shoes.jpg" className={styles.img}/>
                </div>
            </div>
            <div className={styles.description}>
                <div className="display-3 fw-bold">
                    Discover our new arrival
                </div>
                <div className='col-6 my-4'>
                    Phasellus pellentesque sodales neque vel faucibus. Mauris eu consequat sem. Quisque ultrices dictum tortor, hendrerit faucibus tellus fermentum sed.
                </div>
                <button className='btn col-1 text-white border rounded-0'>
                    Learn More
                </button>
            </div>
            {/* <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button> 
            <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button> */}
        </div>
      
    );
}