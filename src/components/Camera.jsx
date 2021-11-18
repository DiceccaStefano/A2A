import React, { useRef, useEffect, useState, Component } from 'react';
import Webcam from "react-webcam";

import { Link } from 'react-router-dom';

import DisplayImage from "./ImageUploder";



// LINKS FOR GALLERY AND PHONE CAMERA

import ImageUploading from "react-images-uploading";

import "./Advcamera.css";



import "./Camera.css"

//BOOTSTRAP-REACT
import { Container, Row, Col, Button, Stack } from 'react-bootstrap';









const Camera = () => {
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);


    const [images, setImages] = React.useState([]);
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


        width: 290, //490
        height: 490, //290
         facingMode: "user",



      //facingMode: { exact: "environment" }

    };

    const videoConstraints = {
        width: 720,
        height: 556,
        facingMode: "user",

    }

    console.log(images)
    console.log(imgSrc)

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     try {
            
    //         const response =  fetch('https://46f2-2-58-138-15.ngrok.io/upload/', {
    //             method: "POST",
    //             headers: { "Content-Type": "multipart/form-data" },
    //             body: imgSrc
    //         });
            
    //         console.log(response);
    //     } catch (err) {
    //         console.error(err.message);
    //     }
    //   event.preventDefault();
    //   const formData2 = new FormData();
    //   formData2.append(
        
    //     images,
    //     images.name
    //   );
      
    // const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'multipart/form-data' }, // DO NOT INCLUDE HEADERSbody: formData2
    // };
    //   fetch('https://b977-2-58-138-15.ngrok.io/upload/', requestOptions)
    //     .then(response => response.json())
    //     .then(function (response) {
    //       console.log('response')
    //       console.log(response)
    //         });
   // }



    const DesktopVersion = () => {
        return (
        <Container className="d-flex flex-column my-3" style={{ minHeight: "85vh", paddingTop:"70px"}} >
            
            <div>
                {imgSrc || images.length === 1 ?

                    <div className="d-flex flex-column justify-content-center">


                        <div className="d-flex  justify-content-center mb-1">
                            <div className="forlabel">
                                <h4 className="mx-2"> <i class="fas fa-dumpster mx-1"></i> Raccolta Indifferenziato </h4>
                            </div>
                        </div>



                        <div className="d-flex  justify-content-center">

                            <img style={{ boxShadow: "4.3px 8.6px 8.6px hsl(0deg 0% 0% / 0.37)", borderRadius: "15px" }} className=" img-fluid"
                                src={imgSrc}
                            />
                            <div className="mt-5" style={{ boxShadow: "4.3px 8.6px 8.6px hsl(0deg 0% 0% / 0.37)", borderRadius: "15px" }}>
                                <ImageUploading
                                    
                                    value={images}
                                    onChange={onChange}
                                    maxNumber={1}
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

                            <div className="d-flex  justify-content-center">
                                
                                <Button type="submit" onClick={() => { images.length === 1 ? setImages([]) : setImgSrc(null) }}
                                    className=" rounded-pill mt-3" style={{ backgroundColor: "#009fda" }} >
                                    Scatta un'altra foto
                                </Button>{' '}
                                                    
                            </div>

                        </div>
                        
                    : //se NON hai l'immagine

                    <div className=" d-flex flex-column justify-content-center">


                        <div className="d-flex  justify-content-center mb-1">
                            <div className="forlabel mx-2">
                                <h4 className="mx-2"> <i class="fas fa-camera mx-1"></i> Fai una foto al rifiuto </h4>
                            </div>
                        </div>


                        <div className="d-flex  justify-content-center " >
                            <Webcam
                                audio={false}
                                ref={webcamRef}
                                screenshotFormat="image/jpeg"

                                videoConstraints={isMobile ? videoConstraints_mobile : videoConstraints}
                                style={{ boxShadow: "4.3px 8.6px 8.6px hsl(0deg 0% 0% / 0.37)", borderRadius: "10px" }}
                            />
                        </div>

                        <Container className=" mt-3 d-flex justify-content-around"
                        >
                           
                                <Row>
                                    <Col className="mr-5">
                                        <div className="search-box mx-4">
                                        <button className="btn-search" >
                                                  
                                        </button>
                                        <input type="text" className="input-search-trasparent" />
                                    </div>
                                    </Col> 
                                    <Col className="mx-5">
                                        {/* <form onClick={handleSubmit}> */}
                                        <Button type="submit"  className=" rounded-pill " style={{backgroundColor:"#009fda"}} onClick={capture}>Scatta una foto</Button>{' '}
                                        {/* </form> */}
                                    </Col>                                  
                                 
                                    <Col className="ml-5">
                                            <ImageUploading
                                                
                                                value={images}
                                                onChange={onChange}
                                                maxNumber={1}
                                            dataURLKey="data_url"
                                        >

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
                                                   
                                        
                                        // <form onSubmit={handleSubmit}>
                                            <Button type="submit" variant="outline-warning" className=" rounded-pill" onClick={onImageUpload} {...dragProps}>
                                                Carica File <i className="far fa-images"></i>
                                            </Button>
                                        // </form>
                                                            


                                                    
                                    )}
                                            </ImageUploading>
                                </Col>
                               </Row>

                                        
                        </Container>



                    </div>}
            </div>


        </Container >
        )
    }


    // VERSIONE MOBILE

    const MobileVersion = () => {
        return (
            <Container fluid style={{marginTop:"125px",minHeight:"80vh"}}>
                <Stack gap={3}>
                     {imgSrc || images.length === 1 ?

                        <div className="d-flex flex-column justify-content-center">


                            <div className="d-flex  justify-content-center mb-1" style={{
                                position: "absolute",
                                top: "145px",
                                right: "44px",
                                left: "44px",
                                
                            }}>
                                <div className="forlabel_mob_scatta">
                                    <h5 className="mx-2"> <i class="fas fa-dumpster mx-1"></i> Raccolta Indifferenziato </h5>
                                </div>
                            </div>

                            <div className="d-flex  justify-content-center">

                                <img style={{ boxShadow: "4.3px 8.6px 8.6px hsl(0deg 0% 0% / 0.37)", borderRadius: "15px" }} className=" img-fluid"
                                    src={imgSrc}
                                />
                                <div className="mt-5">
                                    <ImageUploading
                                        value={images}
                                        onChange={onChange}
                                        maxNumber={1}
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
                                                        <img src={image.data_url} alt="" width="180" />
                                                        <div className="image-item__btn-wrapper">

                                                        </div>
                                                    </div>
                                                ))}

                                            </div>
                                        )}
                                    </ImageUploading>

                                </div>
                            </div>

                            <div className="d-flex  justify-content-center mt-3">
                                <Button onClick={() => { images.length === 1 ? setImages([]) : setImgSrc(null) }}
                                     className=" rounded-pill" 
                                 style={{
                                        position: "absolute",
                                     top: "561px",
                                        backgroundColor:"#009fda"
                                        
                                    }}>
                                     Nuova Foto
                                    <i className="fas fa-camera mx-1"></i>
                                </Button>
                               
                            </div>



                        </div>
                        
                        : // Se non hai l'immagine mostrami la fotocamera

                        
                        <div className=" d-flex flex-column justify-content-center">

                            




                            <div
                                className="d-flex  justify-content-center mb-1" style={{
                                    position: "absolute",
                                    top: "143px",
                                    right: "44px",
                                    left: "44px",
                                }}>
                                <div className="forlabelMobile" >
                                    <h5 className="mx-2">
                                        Fai una foto al rifiuto
                                    </h5>
                                </div>
                            </div>

                            <div className="d-flex  justify-content-center " >
                                <Webcam
                                    audio={false}
                                    ref={webcamRef}
                                    screenshotFormat="image/jpeg"

                                    videoConstraints={isMobile ? videoConstraints_mobile : videoConstraints}
                                    style={{ boxShadow: "4.3px 8.6px 8.6px hsl(0deg 0% 0% / 0.37)", borderRadius: "10px" }}
                                />

                                
                                    
                                {/* TASTO PER ANDARE INDIETRO */}
                                <div className="d-flex  justify-content-center"
                                    style={{
                                        position: "absolute",
                                        top: "83px",
                                        right: "44px",
                                        left: "44px",
                                    }}>
                                    
                                  

                                    {/* BOTTONE INDIETRO */}
                                    <Button href="./" variant="light" className="d-flex" style={{
                                        maxHeight: "35px",
                                        marginLeft:"5px"
                                               }}>
                                            
                                                <i style={{ marginTop: "2.5px" }} className="fas fa-arrow-left mr-1"></i>
                                                <h6 >Indietro</h6>
                                                
                                            </Button>
                                    
                                    {/* BOTTONE INVISIBILE 1 */}
                                     <div className="search-box mx-4">
                                        <button className="btn-search" >
                                                  
                                        </button>
                                        <input type="text" className="input-search-trasparent" />
                                    </div>

                                    {/* BOTTONE INVISIBILE 2 */}
                                    <div className="search-box mx-4">
                                        <button className="btn-search" >
                                                  
                                        </button>
                                        <input type="text" className="input-search-trasparent" />
                                    </div>                                 


                                </div>        
                                    
                                    
                                    
                                

                                 
                                <div className="d-flex  justify-content-center"
                                    style={{
                                        position: "absolute",
                                        top: "551px",
                                        right: "44px",
                                        left: "44px",
                                    }}>
                                    
                                  

                                   {/* BOTTONE FOTOCAMERA INVISIBILE */}
                                    <div className="search-box mx-4">
                                        <button className="btn-search" >
                                                  
                                        </button>
                                        <input type="text" className="input-search-trasparent" />
                                    </div>
                                    {/* BOTTONE FOTOCAMERA */}
                                    <div className="search-box mx-4 " onClick={capture}>
                                        <button className="btn-search">
                                            <i class="fas fa-camera"></i>      
                                        </button>
                                        <input type="text" className="input-search" />
                                    </div>

                                    {/* BOTTONE GALLERIA */}
                                    <div className="">
                                            <ImageUploading
                                            
                                                value={images}
                                                onChange={onChange}
                                                maxNumber={1}
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
                                                        <div className="search-box  mx-4 " onClick={onImageUpload} {...dragProps} >
                                                            <button className="btn-search " >
                                                                <i className="far fa-images"></i>
                                                            </button>
                                                            <input type="text" className="input-search" style={{ backgroundColor: "#fb8c00" }} />
                                                        </div>


                                                    </div>
                                                )}
                                            </ImageUploading>

                                        </div>
                                    
                                   


                                </div>            
                            </div>


                            <div>

                                             

                                     
                                


                            </div>



                        </div>}
                </Stack>

            </Container>
      )
    }



    //RETURN

    return (
        <>
            {isMobile ? <MobileVersion /> : <DesktopVersion />}

        </>
    );
};

// https://www.npmjs.com/package/react-webcam

export default Camera
