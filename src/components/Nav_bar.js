import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './navbar.css';

const Nav_bar = () => {
    const [icon, setIcon] = useState(true);
    const [nav_back, setNav_back] = useState(false);
    console.log(icon);

    const changeBackground = () => {
        if (window.scrollY >= 680) {
            setNav_back(true);
        } else {
            setNav_back(false);
        }
    }

    window.addEventListener("scroll", changeBackground);

    return (
        <>
            <nav
                className={nav_back ? "navbar navbar-expand-lg navbar-light back-nav active" : "navbar navbar-expand-lg navbar-light back-nav "} style={{
                    "borderBottomStyle": "solid",
                    "borderColor": "#009fda",
                }}>
                <Link className="navbar-brand" to="/">
                    <img style={{ "height": "50px", "marginLeft": "0.3cm" }} src="https://casa.a2aenergia.eu/themes/custom/a2a_theme/assets/img/header-logo-a2aenergia.svg" height="30" alt="" />
                </Link>
                <button className="navbar-toggler" type="button" onClick={() => setIcon(!icon)} style={{ "marginRight": "0.3cm" }} data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className=""><i style={{ "color": "#009fda" }} className={` ${icon ? "fas fa-list-ul " : "fas fa-times"}`}></i></span>
                </button>

                <div className="collapse navbar-collapse text-center " id="navbarSupportedContent">
                    <ul className="navbar-nav mx-3  ">
                        <li className="nav-item active">
                            <Link to="/servizi" className="nav-link">
                                <h4 className="navbar-ancor">
                                    Servizi
                                </h4>
                                <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <h4 className="navbar-ancor">
                                    Supporto
                                </h4>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <h4 className="navbar-ancor">
                                    News & Eventi
                                </h4>
                            </a>
                        </li>
                        <li className="nav-item dropdown">

                        </li>

                    </ul>

                </div>

            </nav>
            <div style={{ "padding": "39px" }}>

            </div>

        </>



    );
}

export default Nav_bar
