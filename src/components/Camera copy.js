import React, { useRef, useEffect, useState } from 'react';

import { Link } from "react-router-dom";

import "./Camera.css"


const Camera = () => {

    const videoRef = useRef(null);
    const photoRef = useRef(null);
    const [hasPhoto, setHasPhoto] = useState(false);

    const getVideo = () => {
        navigator.mediaDevices
            .getUserMedia({
                video: {
                    width: 1920,
                    height: 1080
                }
            })
            .then(stream => {
                let video = videoRef.current;
                video.srcObject = stream;
                video.play();
            })
            .catch(err => {
                console.error(err);
            })
    }

    const takePhoto = () => {
        const width = 414;
        const height = width / (16 / 9);

        let video = videoRef.current;
        let photo = photoRef.current;

        photo.width = width;
        photo.height = height;

        let ctx = photo.getContext('2d');
        ctx.drawImage(video, 0, 0, width, height);
        setHasPhoto(true);
    }

    useEffect(() => {
        getVideo();
    }, [videoRef])

    const Fotocam = () => {
        return (
            <>

                <div className="d-flex flex-row">
                    <div className="p-2">
                        <video className="videoCamera" ref={videoRef} src=""></video>
                    </div>
                    <div className="p-2">
                        <button
                            onClick={takePhoto}
                            className="btn btn-success "
                            data-toggle="button"
                            aria-pressed="false"
                            autocomplete="off"
                            className="btn btn-danger">

                            Cattura Immagine

                        </button>
                    </div>
                </div>

            </>
        )
    }

    const RefreshPage = () => {

        const refreshPage = () => {
            window.location.reload();
        }



        return (
            <>
                <div className="d-flex flex-column justify-content-center">
                    <h1>Scatta un'altra foto</h1>
                    <div className=" mt-2 d-flex justify-content-center">
                        <button className="btn btn-success "
                            data-toggle="button"
                            aria-pressed="false"
                            autocomplete="off"
                            onClick={refreshPage}>
                            Scatta un altra foto
                        </button>

                    </div>
                </div>
            </>
        );
    }


    return (
        <>
            <div className="">

                <div>
                    {!hasPhoto ? <Fotocam /> : <RefreshPage />}
                </div>



                <div className={"result d-flex justify-content-center my-5" + (hasPhoto ? "hasPhoto" : "")}>
                    <canvas ref={photoRef}></canvas>
                    {/* <button>Chiudi</button> */}

                </div>



            </div>
        </>
    )
}

export default Camera
