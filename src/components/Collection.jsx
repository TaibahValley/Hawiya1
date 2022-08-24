import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import card2 from "../assets/imgs/card2.png"
import card3 from "../assets/imgs/card3.png"
import card4 from "../assets/imgs/card4.png"
import anonymous from "../assets/imgs/anonymous.png"
import "../assets/css/style.css"
import { flash, bounceOut, rubberBand, shake, zoomOutLeft, zoomIn, rotateOut, lightSpeedIn, wobble, jello, tada, flip} from 'react-animations';
import styled, { keyframes } from 'styled-components';
import TLogo from "../assets/imgs/tezosLogo1.png"
import Polygon from "../assets/imgs/svg/polygon.svg"
import Slider from "../assets/imgs/slidersd.png";
import like from "../assets/imgs/like.png";

const shakeAnimation = keyframes`${shake}`;


const ShakeDiv = styled.div`
  animation: infinite 15s ${shakeAnimation};
`;





function Collection({t}) {
  return (
    <Container className="section" id="Collections">
    <div className="rows">
      <Row>
        <Col xs={8}>
        <h1>{t("Collections")}</h1>
        </Col>
        {/* <Col></Col> */}
        <Col>
        <img className="sliderImg" src={Slider} alt="slider"/>
        </Col>
      </Row>
      
      <Card className="coll-card">
      <Col className="c-card">
        <Row>
          <img className="i-card" src={card2} alt="sattam" />
        </Row>
        <Row className='card2row'>
        <Col xs={8}>
        <br/>
        <p className="Trans">T17 NFT <br/> By <span1>Hawiya </span1></p>
        </Col>
        <Col>
        <br/>
        <a className="coll-b" >wish list</a>
        </Col>
      </Row>

      <Row className='card3row'>
        <Col xs={9}>
        <img className="coll-tezosLogo"src={Polygon}/>
        <p className='coll-p'>Current bid <br/> 20.50 XTZ = 41.041 USD</p>
        </Col>
        <Col className="like-row">
        <img className="c-like" src={like}/>
        </Col>
      </Row>
      </Col>
      </Card>

      <Card className="coll-card">
        <Col className="c-card">
          <Row>
          <img className="i-card " src={card3} alt="sattam" />
          </Row>
          <Row className='card2row'>
        <Col xs={8}>
        <br/>
        <p className="Trans">T17 NFT <br/> By <span1>Hawiya</span1></p>
        </Col>
        <Col>
        <br/>
        <a className="coll-b" >wish list</a>
        </Col>
      </Row>

      <Row className='card3row'>
        <Col xs={9}>
        <img className="coll-tezosLogo"src={Polygon}/>
        <p className='coll-p'>Current bid <br/> 20.50 XTZ = 41.041 USD</p>
        </Col>
        <Col className="like-row">
        <img className="c-like" src={like}/>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-heart-fill" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/> </svg> */}
        </Col>
      </Row>
        </Col>

      </Card>


      <Card className="coll-card">
      <Col  className="c-card">
      <Row>
        <img className="i-card " src={card4} alt="sattam" />
      </Row>
      <Row className='card2row'>
        <Col xs={8}>
        <br/>
        <p className="Trans">T17 NFT <br/> By <span1>Hawiya</span1></p>
        </Col>
        <Col>
        <br/>
        <a className="coll-b" >wish list</a>
        </Col>
      </Row>

      <Row className='card3row'>
        <Col xs={9}>
        <img className="coll-tezosLogo"src={Polygon}/>
        <p className='coll-p'>Current bid <br/> 20.50 XTZ = 41.041 USD</p>
        </Col>
        <Col className="like-row">
        <img className="c-like" src={like}/>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-heart-fill" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/> </svg> */}
        </Col>
      </Row>
      </Col>
      </Card>


      <Row id="share-row">
      <Col>
      <br/>
      <ShakeDiv><a href="mailto:my_email@gmail.com" id="c-share" >{t("Collection-f")}</a></ShakeDiv>
      </Col>
    </Row>
  
    </div>

  </Container>
  )
}

export default Collection