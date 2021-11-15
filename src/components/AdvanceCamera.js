import React from 'react'

// https://www.npmjs.com/package/react-images-uploading


import ImageUploading from "react-images-uploading";

import "./Advcamera.css";

function AdvanceCamera() {
    const [images, setImages] = React.useState([]);
    const maxNumber = 69;
    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };



    console.log(images.length)



    return (
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
                                    {/* <button onClick={() => onImageUpdate(index)}>Update</button>
                                    <button onClick={() => onImageRemove(index)}>Remove</button> */}
                                </div>
                            </div>
                        ))}
                        {images.length > 0 ?
                            "Immagine caricata correttamente"
                            :
                            <div className="search-box mx-2" onClick={onImageUpload} {...dragProps} >
                                <button className="btn-search " >
                                    <i className="far fa-images"></i>
                                </button>
                                <input type="text" className="input-search" style={{ backgroundColor: "#e76e3d" }} />
                            </div>}
                        {/* <button
                            style={isDragging ? { color: "red" } : null}
                            onClick={onImageUpload}
                            {...dragProps}
                        >
                            Click or Drop here
                        </button>
                        &nbsp; */}
                        {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}

                    </div>
                )}
            </ImageUploading>

        </div>
    );
}

export default AdvanceCamera;









