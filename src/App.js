import React, { Component } from 'react';
import './App.css';
import image1 from './images/1.png';
import image2 from './images/2.png';
import image3 from './images/3.jpg';
import image4 from './images/4.jpg';
import image5 from './images/5.jpg';
import image6 from './images/6.jpg';
import image7 from './images/7.jpg';
import image8 from './images/8.jpg';
import image9 from './images/9.jpg';
import image10 from './images/10.jpg';
import image11 from './images/12.jpg';
import image12 from './images/13.jpg';
import image13 from './images/14.jpg';
import image14 from './images/15.jpg';
import image15 from './images/16.jpg';
import image16 from './images/17.jpg';
import ImageCard from './ImageCard.js';

const images = [
  {image:image1, clicked: false},
  {image:image2, clicked: false},
  {image:image3, clicked: false},
  {image:image4, clicked: false},
  {image:image5, clicked: false},
  {image:image6, clicked: false},
  {image:image7, clicked: false},
  {image:image8, clicked: false},
  {image:image9, clicked: false},
  {image:image10, clicked: false},
  {image:image11, clicked: false},
  {image:image12, clicked: false},
  {image:image13, clicked: false},
  {image:image14, clicked: false},
  {image:image15, clicked: false},
  {image:image16, clicked: false}
];

const adverbs = [
  'Click Image to Start Game',
  'capable',
  'perfect',
  'wonderful',
  'vigorous',
  'talented',
  'splendid',
  'skillful',
  'proud',
  'productive',
  'lovely',
  'knowledgeable',
  'fantastic',
  'fabulous',
  'excellent',
  'wise',
  'honorable',
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      topScore: 0,
      images: images,
      gameEnd: false
    }
    this.handleFail = this.handleFail.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
    this.shuffleImages = this.shuffleImages.bind(this);
  }

  shuffleImages(images) {
    let i = 0, j = 0, temp = null;

    for (i = images.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = images[i]
      images[i] = images[j]
      images[j] = temp
    }

    return images;
  }

  handleSuccess(index) {
    const score = this.state.score + 1;
    let topScore = this.state.topScore;
    let images = this.state.images;
    const gameEnd = false;
    images[index].clicked = true;

    if (topScore < score) {
      topScore = score;
    }

    images = this.shuffleImages(images);

    this.setState({ topScore, score, images, gameEnd });
  }

  handleFail() {
    let images = this.state.images;
    images.forEach(image => {
      image.clicked = false
    });
    this.setState({ gameEnd: true, score: 0, images: images });
  }

  render() {
    return (
      <div>
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper row">
              <div className="col s12">
                <a href="/" className="brand-logo">Click Once</a>
                <ul id="nav-mobile" className="right">
                  <li><a href="#">Current Score <span className="new badge" data-badge-caption={adverbs[this.state.score]}>{this.state.score}</span></a></li>
                  <li>|</li>
                  <li><a href="#">Top Score <span className="new badge" data-badge-caption="">{this.state.topScore}</span></a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className={`container ${this.state.gameEnd ? 'gameend' : ''}`}>
          <div class="row">
            {
              this.state.images.map((image, index) => {
                return <ImageCard
                  key={index}
                  imgSrc={image}
                  imgAlt={Math.random().toString(36).substring(7)}
                  handleSuccess={this.handleSuccess}
                  handleFail={this.handleFail}
                  index={index}
                />;
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
