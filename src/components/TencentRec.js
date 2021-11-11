import React, { useEffect, useState, useRef } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";

const TencentRec = () => {
    const [model, setModel] = useState();
    async function loadModel() {
        try {
            const model = await cocoSsd.load();
            setModel(model);
            console.log("set loaded Model");
        }
        catch (err) {
            console.log(err);
            console.log("failed load model");
        }
    }
    useEffect(() => {
        tf.ready().then(() => {
            loadModel();
        });
    }, []);

    async function predictionFunction() {
        //Clear the canvas for each prediction
        var cnvs = document.getElementById("myCanvas");
        if (cnvs) {
            var ctx = cnvs.getContext("2d");
        } else {
            console.log("no Photo")
        }
        ctx.clearRect(0, 0, webcamRef.current.video.videoWidth, webcamRef.current.video.videoHeight);
        //Start prediction
        const predictions = await model.detect(document.getElementById("img"));
        if (predictions.length > 0) {
            console.log(predictions);
            for (let n = 0; n < predictions.length; n++) {
                console.log(n);
                if (predictions[n].score > 0.8) {
                    //Threshold is 0.8 or 80%
                    //Extracting the coordinate and the bounding box information
                    let bboxLeft = predictions[n].bbox[0];
                    let bboxTop = predictions[n].bbox[1];
                    let bboxWidth = predictions[n].bbox[2];
                    let bboxHeight = predictions[n].bbox[3] - bboxTop;
                    console.log("bboxLeft: " + bboxLeft);
                    console.log("bboxTop: " + bboxTop);
                    console.log("bboxWidth: " + bboxWidth);
                    console.log("bboxHeight: " + bboxHeight);
                    //Drawing begin

                    ctx.beginPath();
                    ctx.font = "28px Arial";
                    ctx.fillStyle = "red";
                    ctx.fillText(
                        predictions[n].class + ": " + Math.round(parseFloat(predictions[n].score) * 100) +
                        "%", bboxLeft, bboxTop);
                    ctx.rect(bboxLeft, bboxTop, bboxWidth, bboxHeight);
                    ctx.strokeStyle = "#FF0000";
                    ctx.lineWidth = 3;
                    ctx.stroke();
                    console.log("detected");
                }
            }
        }
        //Rerun prediction by timeout
        setTimeout(() => predictionFunction(), 500);
    }

    //Webcam:
    const webcamRef = React.useRef(null);
    const [videoWidth, setVideoWidth] = useState(490);
    const [videoHeight, setVideoHeight] = useState(290);

    const videoConstraints = {
        height: 290,
        width: 490,
        facingMode: { exact: "environment" },
    };

    return (

        <>

            <div className="d-flex flex-column justify-content-center">
                <div className="d-flex  justify-content-center">
                    <button
                        className="btn btn-success rounded-pill"
                        variant={"contained"}
                        style={{ marginTop: "10px" }}
                        onClick={() => {
                            predictionFunction();
                        }}
                    >
                        Start Detect
                    </button>
                </div>
            </div>

            <div style={{ position: "relative" }}>
                <div style={{ position: "absolute", top: "40px", right: "13px" }}>
                    <Webcam
                        audio={false}
                        id="img"
                        ref={webcamRef}
                        screenshotQuality={1}
                        screenshotFormat="image/jpeg"
                        videoConstraints={videoConstraints}
                    />
                </div>
                <div style={{ position: "absolute", top: "100px", zIndex: "9999" }}>
                    <canvas
                        id="myCanvas"
                        width={videoWidth}
                        height={videoHeight}
                        style={{ backgroundColor: "transparent" }}
                    />
                </div>
            </div>
        </>
    )
}

export default TencentRec
