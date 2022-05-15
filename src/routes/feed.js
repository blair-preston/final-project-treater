import React from 'react';
import { Container } from 'react-bootstrap';
import DogDisplay from '../components/dogdisplay';
import Checkmark from '../images/checkmark.png';
import Xmark from '../images/xmark.png';
import FooterContainer from '../components/footerContainer';

export default function Feed() {
  return (
    <div className="wrapper">
      <Container className="feedPageContainer" fluid>
          <h2 className="dogdisplayHeader">Let's find your furry friend <br/> a furry friend!</h2>
          <div className="feed-dog-and-image-wrapper">
            <img className="check-and-x" src={Xmark} alt="xmark"></img>
            <DogDisplay />
            <img className="check-and-x" src={Checkmark} alt="checkmark"></img>
          </div>
      </Container>
        {/* <FooterContainer /> */}
    </div>
  )
}
