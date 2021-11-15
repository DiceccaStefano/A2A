import React, { useRef, useEffect, useState, Component } from 'react';
import Webcam from "react-webcam";

import { Link } from 'react-router-dom';

import DisplayImage from "./ImageUploder";



// LINKS FOR GALLERY AND PHONE CAMERA

import ImageUploading from "react-images-uploading";

import "./Advcamera.css";



import "./Camera.css"









const Camera = () => {
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);


    const [images, setImages] = React.useState([]);
    const maxNumber = 69;
    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };




    var isMobile = false; //initiate as false
    // device detection
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true;
    }





    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);

    const videoConstraints_mobile = {


        width: 490, //490
        height: 290, //290
        //facingMode: "user",



        facingMode: { exact: "environment" }

    };

    const videoConstraints = {
        width: 720,
        height: 576,
        facingMode: "user",

    }















    return (
        <>


            <div className="d-flex flex-column my-3" style={{ minHeight: "85vh" }} >
                <div>
                    {imgSrc || images.length === 1 ?

                        <div className="d-flex flex-column justify-content-center">

                            {!isMobile ?
                                <div className="d-flex  justify-content-center mb-1">
                                    <div className="forlabel">
                                        <h4 className="mx-2"> <i class="fas fa-dumpster mx-1"></i> Raccolta Indifferenziato </h4>
                                    </div>
                                </div>
                                :
                                <div className="d-flex  justify-content-center mb-1" style={{
                                    position: "absolute",
                                    top: "113px",
                                    right: "44px",
                                    left: "44px",
                                }}>
                                    <div className="forlabel_mob_scatta">
                                        <h5 className="mx-2"> <i class="fas fa-dumpster mx-1"></i> Raccolta Indifferenziato </h5>
                                    </div>
                                </div>}

                            <div className="d-flex  justify-content-center">

                                <img style={{ boxShadow: "4.3px 8.6px 8.6px hsl(0deg 0% 0% / 0.37)", borderRadius: "15px" }} className=" img-fluid"
                                    src={imgSrc}
                                />
                                <div className="mt-5">
                                    <ImageUploading
                                        multiple
                                        value={images}
                                        onChange={onChange}
                                        maxNumber={maxNumber}
                                        dataURLKey="data_url">

                                        {({
                                            imageList,
                                            onImageUpload,
                                            onImageRemoveAll,
                                            onImageUpdate,
                                            onImageRemove,
                                            isDragging,
                                            dragProps
                                        }) => (
                                            // write your building UI
                                            <div className="mt-5" >
                                                {imageList.map((image, index) => (
                                                    <div key={index} className="image-item">
                                                        <img src={image.data_url} alt="" width="200" />
                                                        <div className="image-item__btn-wrapper">

                                                        </div>
                                                    </div>
                                                ))}

                                            </div>
                                        )}
                                    </ImageUploading>

                                </div>
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
                                        onClick={() => { images.length === 1 ? setImages([]) : setImgSrc(null) }}
                                        style={{
                                            position: "absolute",
                                            top: "509px",
                                            right: "78.75px",
                                            left: "78.75px",
                                        }}>
                                        Nuova Foto
                                        <i className="fas fa-camera mx-1"></i>
                                    </button>
                                </div>

                            }

                        </div>
                        :

                        <div className=" d-flex flex-column justify-content-center">
                            {isMobile &&
                                <div className="d-inline-flex  bd-highlight">
                                    <Link className="mt-3 ml-5 " to="/">
                                        <div className="  d-flex flex-row " style={{
                                            padding: "0px",

                                            maxWidth: "30px",
                                            borderRadius: "10px",
                                            color: "#009fda",
                                        }}>
                                            <i style={{ marginTop: "2.5px" }} className="fas fa-arrow-left mr-1"></i>
                                            <h6 >Indietro</h6>
                                        </div>


                                    </Link>

                                </div>}

                            {!isMobile ?
                                <div className="d-flex  justify-content-center mb-1">
                                    <div className="forlabel mx-2">
                                        <h4 className="">Fai una foto al rifiuto</h4>
                                    </div>
                                </div>

                                :


                                <div className="d-flex  justify-content-center mb-1" style={{
                                    position: "absolute",
                                    top: "145px",
                                    right: "44px",
                                    left: "44px",
                                }}>
                                    <div className="forlabelMobile" >
                                        <h5 className="mx-2">
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

                                <div>
                                    <div className="d-flex  justify-content-center"
                                        style={{
                                            position: "absolute",
                                            top: "563px",
                                            right: "44px",
                                            left: "44px",
                                        }}>

                                        <Link to="/">


                                            {/* <button className="btn btn-success mt-3 mx-3"
                                            data-toggle="button"
                                            aria-pressed="false"
                                            autocomplete="off"

                                        >
                                            <i className="fas fa-home"></i>
                                        </button> */}
                                        </Link>
                                        <div className="search-box " onClick={capture}>
                                            <button className="btn-search">
                                                <i class="fas fa-camera"></i>
                                            </button>
                                            <input type="text" className="input-search" />
                                        </div>

                                        {/* <button className="btn btn-primary mt-3"
                                        data-toggle="button"
                                        aria-pressed="false"
                                        autocomplete="off"
                                        onClick={capture}>
                                        <i class="fas fa-camera"></i>
                                    </button> */}


                                    </div>


                                    <div className="search-box mx-2" style={{
                                        position: "absolute",
                                        top: "-63.5px",
                                        right: "26px",
                                        left: "257px"
                                    }} >
                                        <div className="">
                                            <ImageUploading
                                                multiple
                                                value={images}
                                                onChange={onChange}
                                                maxNumber={maxNumber}
                                                dataURLKey="data_url">

                                                {({
                                                    imageList,
                                                    onImageUpload,
                                                    onImageRemoveAll,
                                                    onImageUpdate,
                                                    onImageRemove,
                                                    isDragging,
                                                    dragProps
                                                }) => (
                                                    // write your building UI
                                                    <div className="" >
                                                        {imageList.map((image, index) => (
                                                            <div key={index} className="image-item">
                                                                <img src={image.data_url} alt="" width="100" />
                                                                <div className="image-item__btn-wrapper">

                                                                </div>
                                                            </div>
                                                        ))}
                                                        <div className="search-box mx-2" onClick={onImageUpload} {...dragProps} >
                                                            <button className="btn-search " >
                                                                <i className="far fa-images"></i>
                                                            </button>
                                                            <input type="text" className="input-search" style={{ backgroundColor: "#e76e3d" }} />
                                                        </div>


                                                    </div>
                                                )}
                                            </ImageUploading>

                                        </div>
                                    </div>


                                </div>}



                        </div>}
                </div>


            </div >

            {/* UPLODER IMAGE */}



            {/* FOOTER  SMALL*/}
            <div >
                <div className="footer-dark">
                    <footer>
                        <div className="container">
                            <div className="row">
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




        </>
    );
};

// https://www.npmjs.com/package/react-webcam

export default Camera
