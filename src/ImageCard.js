import React, { Component } from 'react';
import { width } from 'window-size';

class ImageCard extends Component {
    constructor(props) {
        super(props);
        this.handleClick= this.handleClick.bind(this);
    }

    handleClick() {
        if (!this.props.imgSrc.clicked) {
            this.props.handleSuccess(this.props.index);
        } else {
            this.props.handleFail();            
        }
    }

    render() {
        return (
            <div className="col s3 images">
                <div className="card">
                    <div onClick={this.handleClick}
                         className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src={this.props.imgSrc.image} alt={this.props.imgAlt} />
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageCard;
