import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <header>

                <div className="overlay"></div>


                <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                    <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />
                </video>

                <div className="container h-100">
                    <div className="d-flex h-100 text-center align-items-center">
                        <div className="w-100 text-white">
                            <h1 className="">Dove lo butto? Comune di Milano</h1>
                            <p className="lead mb-0">Non sai dove buttare qualcosa? Utilizza la nostra guida per differenziare i rifiuti.</p>
                            <div className="justify-content-center d-flex mt-4">
                                {/* //search button */}
                                <div className="d-flex flex-column">
                                    <div className="search-box ">
                                        <button className="btn-search"><i className="fas fa-search"></i></button>
                                        <input type="text" className="input-search" placeholder="Cerca un articolo..." />
                                    </div>
                                    <Link to="fotocamera" className="search-box mt-3">
                                        <button className="btn-search"><i class="fas fa-camera"></i></button>
                                        <input type="text" className="input-search" placeholder="Cerca un articolo..." />
                                    </Link>
                                    {/* <Link to="ia" className="search-box mt-3">
                                        <button className="btn-search"><i class="fas fa-eye"></i></button>
                                        <input type="text" className="input-search" placeholder="Cerca un articolo..." />
                                    </Link> */}
                                </div>



                            </div>
                        </div>

                    </div>
                </div>
            </header>

        </div>
    )
}

export default Header
