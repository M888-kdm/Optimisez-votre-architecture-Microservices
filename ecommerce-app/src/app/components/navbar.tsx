import Link from 'next/link';
import Image from 'next/image';

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg px-4 py-2 d-flex bg-dark justify-content-between">
            <div className='d-flex col-1 justify-content-between text-white'>
                <div className='d-flex me-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag me-2" viewBox="0 0 16 16">
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                    </svg>
                    <Link href="/products" className='nav-link text-white'>Products</Link>
                </div>
            </div>
            
            <Link className="navbar-brand text-uppercase fw-bold col-1 mx-auto text-center text-white" href="/">E-commerce</Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="d-flex justify-content-end align-items-center" id="navbarNav">
                <Link className="nav-link" href="/auth/login">
                    <button className='btn d-flex align-items-center ms-3 px-4 py-3 bg-primary text-white fw-bold'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person me-2" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                        </svg>
                        Login
                    </button>
                </Link>
            </div>

        </nav>
    );
}