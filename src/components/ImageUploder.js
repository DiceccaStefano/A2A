import React, { Component } from 'react';
class DisplayImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null
        };

        this.onImageChange = this.onImageChange.bind(this);
    }

    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            this.setState({
                image: URL.createObjectURL(img)
            });
        }
    };

    ImageFile = () => {
        <img src={this.state.image} height="200px" />
    }

    render() {
        return (
            <div>
                <div>
                    <div style={{ maxWidth: "20px" }}>
                        <img src={this.state.image} />
                        <i class="far fa-images"></i>


                        <input type="file" name="file" onChange={this.onImageChange} />
                        <button onClick={this.onImageChange}>CIAO</button>


                    </div>
                    <div onChange={this.onImageChange}>
                        pippo
                    </div>
                </div>
            </div >
        );
    }
}
export default DisplayImage;
