import React, { useRef, useEffect, useState } from 'react';
import Webcam from "react-webcam";

import { Link } from 'react-router-dom';



import "./Camera.css"


const Camera = () => {
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);

    var isMobile = false; //initiate as false
    // device detection
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true;
    }


    console.log(isMobile)


    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);

    const videoConstraints_mobile = {


        width: 440,
        height: 290,
        facingMode: "user",



        //facingMode: { exact: "environment" }

    };

    const videoConstraints = {
        width: 720,
        height: 576,
        facingMode: "user",

    }

    function getOrientation() {
        var orientation = window.innerWidth > window.innerHeight ? true : false;
    }

    console.log(getOrientation())
    var orientation = window.innerWidth > window.innerHeight ? true : false;



    return (
        <>


            <div className="d-flex flex-column my-3" style={{ minHeight: "85vh" }} >
                <div>
                    {imgSrc ?

                        <div className="d-flex flex-column justify-content-center">
                            <div className="d-flex  justify-content-center mb-1">
                                <div className="forlabel"
                                >
                                    <h4 className="mx-2"> <i class="fas fa-dumpster mx-1"></i> Raccolta Indifferenziato </h4>
                                </div>
                            </div>
                            <div className="d-flex  justify-content-center">

                                <img style={{ boxShadow: "4.3px 8.6px 8.6px hsl(0deg 0% 0% / 0.37)", borderRadius: "15px" }} className=" img-fluid"
                                    src={imgSrc}
                                />
                            </div>
                            {!isMobile ?
                                <div className="d-flex  justify-content-center">
                                    <button className="btn btn-success mt-3"
                                        data-toggle="button"
                                        aria-pressed="false"
                                        autocomplete="off"
                                        onClick={() => setImgSrc(null)}>
                                        Scatta un'altra foto
                                    </button>
                                </div>
                                :
                                <div className="d-flex  justify-content-center">
                                    <button className="btn btn-success mt-3"
                                        data-toggle="button"
                                        aria-pressed="false"
                                        autocomplete="off"
                                        onClick={() => setImgSrc(null)}>
                                        Nuova Foto
                                        <i className="fas fa-camera mx-1"></i>
                                    </button>
                                </div>

                            }

                        </div>
                        :
                        <div className=" d-flex flex-column justify-content-center">
                            {!isMobile ?
                                <div className="d-flex  justify-content-center mb-1">
                                    <div className="forlabel ">
                                        <h4 className="">Fai una foto al rifiuto</h4>
                                    </div>
                                </div>

                                :


                                <div className="d-flex  justify-content-center mb-1" style={{
                                    position: "absolute",
                                    top: "113px",
                                    right: "44px",
                                    left: "44px",
                                }}>
                                    <div className="forlabel" >
                                        <h5 className="">
                                            Fai una foto al rifiuto
                                        </h5>
                                    </div>
                                </div>}
                            <div className="d-flex  justify-content-center " >
                                <Webcam
                                    audio={false}
                                    ref={webcamRef}
                                    screenshotFormat="image/jpeg"

                                    videoConstraints={isMobile ? videoConstraints_mobile : videoConstraints}
                                    style={{ boxShadow: "4.3px 8.6px 8.6px hsl(0deg 0% 0% / 0.37)", borderRadius: "10px" }}
                                />
                            </div>
                            {!isMobile ?
                                <div className="d-flex  justify-content-center"
                                >
                                    <button className="btn btn-success mt-3"
                                        data-toggle="button"
                                        aria-pressed="false"
                                        autocomplete="off"
                                        onClick={capture}
                                    >
                                        Scatta una foto
                                    </button>
                                </div>
                                :
                                <div className="d-flex  justify-content-center"
                                    style={{
                                        position: "absolute",
                                        top: "509px",
                                        right: "44px",
                                        left: "44px",
                                    }}>

                                    <Link to="/">
                                        <button className="btn btn-success mt-3 mx-3"
                                            data-toggle="button"
                                            aria-pressed="false"
                                            autocomplete="off"

                                        >
                                            <i className="fas fa-home"></i>
                                        </button>
                                    </Link>

                                    <button className="btn btn-primary mt-3"
                                        data-toggle="button"
                                        aria-pressed="false"
                                        autocomplete="off"
                                        onClick={capture}>
                                        <i class="fas fa-camera"></i>
                                    </button>

                                    <Link to="/">
                                        <button className="btn btn-success mt-3 mx-3"
                                            data-toggle="button"
                                            aria-pressed="false"
                                            autocomplete="off"
                                        >
                                            <i className="far fa-images"></i>
                                        </button>
                                    </Link>
                                </div>}



                        </div>}
                </div>


            </div >

            {/* <div class="NavbarCamera">
                <div className="main">
                    <div> <a href="#home" class="active"><i class="fas fa-home"></i></a></div>
                    <div><a href="#news"><i class="fas fa-camera"></i></a></div>
                    <div><a href="#contact"><i class="far fa-images"></i></a></div>
                </div>

            </div> */}




        </>
    );
};

// https://www.npmjs.com/package/react-webcam

export default Camera
