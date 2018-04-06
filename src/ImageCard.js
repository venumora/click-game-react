import React, { Component } from 'react';
import { width } from 'window-size';

class ImageCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
        this.handleClick= this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({clicked: true});
    }

    render() {
        return (
            <div className="col s3 images">
                <div className="card">
                    <div onClick={this.handleClick} className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src={this.props.imgSrc} alt={this.props.imgAlt} />
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageCard;
