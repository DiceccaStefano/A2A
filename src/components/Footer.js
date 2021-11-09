import React from 'react'

const Footer = () => {
    return (
        <div >
            <div className="footer-dark">
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-4 item text">
                                <h3 >Services</h3>
                                <ul>
                                    <li>Luce</li>
                                    <li>Gas</li>
                                </ul>

                            </div>
                            <div className="col-sm-6 col-md-4 item text">
                                <h3>About</h3>
                                <ul>
                                    <li>Contatti</li>
                                    <li>Help</li>
                                </ul>

                            </div>
                            <div className="col-md-4 item text">
                                <h3>A2A Energia SPA </h3>
                                <p>Codice fiscale e Partita Iva 12883420155</p>
                            </div>
                            <div className="col item social"><a href="#"><i className="icon ion-social-facebook"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-instagram"></i></a></div>
                        </div>
                        <p className="copyright">Deloitte Risk Advisory © 2021</p>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer
