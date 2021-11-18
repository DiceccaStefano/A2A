import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CloseButton from 'react-bootstrap/CloseButton';
import { Link } from "react-router-dom";
import Logo from "./LogoA2A.png";



import 'bootstrap/dist/css/bootstrap.min.css'

import "./Nav_react.css"


const Nav_react = () => {
    var isMobile = false; //initiate as false
    // device detection
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true;
    }



    return (
        <Navbar fixed="top"  expand="lg" style={{
            
            backgroundColor: "#009fda",
            paddingTop: "0rem",
            paddingBottom: "0rem"
        }}>
            {!isMobile &&
                
                <Navbar.Brand href="#home"
                    style={{
                    paddingTop: "0rem",
                    paddingBottom: "0rem"
                }}>
                
                    <Link to="/">
                        <img style={{ width: "12%", "marginLeft": "0.3cm", }} src={Logo}  alt="" />
                    </Link>

                </Navbar.Brand>
                
                
            }
            <Container fluid >
                {isMobile &&
                    <Navbar.Brand href="#home">
                        <Link to="/">
                            <img style={{ "height": "50px", "marginLeft": "0.3cm" }} src={Logo} height="40" alt="" />
                        </Link>
                    </Navbar.Brand>
                }
    
    <Navbar.Toggle  aria-controls="basic-navbar-nav" className="btn-collapse-color " />
                {isMobile ?
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="me-auto text-center fs-5"  >
            
                            <Link to="/servizi" className="nav-link  p-2 bd-highlight fw-bold navbar-ancor">
                                    Servizi
                            </Link>
                            <Link to="/fotocamera" className="nav-link  p-2 bd-highlight fw-bold navbar-ancor">
                                    Fotocamera
                            </Link>
                            <Link to="/servizi" className="nav-link  p-2 bd-highlight fw-bold navbar-ancor">
                                    Investitori
                            </Link>
                            <Link to="/servizi" className="nav-link  p-2 bd-highlight fw-bold navbar-ancor">
                                    Sostenibilità
                            </Link>                      
                            
                            
            
                        </Nav>
                    </Navbar.Collapse>
                    
                    : // Se non sono su mobile allora fai questo:

                      <Navbar.Collapse id="basic-navbar-nav" className={!isMobile && "d-flex flex-row-reverse bd-highlight"}>
                        <Nav   >
            
                            <Link to="/servizi" className="nav-link fw-bold p-2 bd-highlight navbar-ancor"  >
                                    SERVIZI
                            </Link>
                            <Link to="/fotocamera" className="nav-link fw-bold p-2 bd-highlight navbar-ancor" >
                                    FOTOCAMERA
                            </Link>
                            <Link to="/servizi" className="nav-link fw-bold p-2 bd-highlight navbar-ancor" >
                                    INVESTITORI
                            </Link>
                            <Link to="/servizi" className="nav-link fw-bold p-2 bd-highlight navbar-ancor" >
                                    SOSTENIBILITA'
                            </Link>                      
                            
                            
            
                        </Nav>
                      </Navbar.Collapse>
    }
  </Container >
</Navbar>
    )
}

export default Nav_react


//className={!isMobile && "d-flex flex-row-reverse bd-highlight"} >
