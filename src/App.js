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
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16
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
      topScore: 0
    }
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
        <div className="container">
          <div class="row">
            {
              images.map((image, index) => {
                return <ImageCard key={index} imgSrc={image} imgAlt={Math.random().toString(36).substring(7)} />;
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
