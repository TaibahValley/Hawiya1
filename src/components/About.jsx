import React from 'react'
import { Container, Row, Col, Card, Button,  } from 'react-bootstrap';
import SattamImg from "../assets/imgs/sattam2.png"
import TLogo from "../assets/imgs/tezosLogo.png"
import like from "../assets/imgs/like.png"
import Polygon from "../assets/imgs/svg/polygon.svg"


function About({t}) {
  return (
    <Container className="section">
      <div className='rows'>
          <Card className="about-card">

            <Row>
              <div id="About1col">
              <img className="sattamImg2 " src={SattamImg} alt="sattam" />
              </div>
            </Row>

            <Row><br/></Row>


            <Row>
              <Row>
              <Col xs={7} id="About2col">
              <p className="Trans">SATTAM NFT <br/>By <span1>Hawiya team</span1></p>
              </Col>
              <Col>
              <a id="wishListBt" >Wish List</a>
              </Col>
              </Row>

              <Row>
                <Col xs={9} id="About2col">
                <img src={Polygon} id="tezosLogo"/>
                <p id="nftPrice">Current bid <br/> 150 XTZ = 300.3 USD</p>
                </Col>
                <Col>
                <img className="like" src={like}/>
                </Col>
              </Row>


{/* 
              <Col xs={6} id="About2col">
              <br/>
              <p className="Trans">SATTAM NFT <br/>By <span1>Hawiya team</span1></p>
              <img src={TLogo} id="tezosLogo"/>
              <p id="nftPrice">Current bid <br/> 150 XTZ = 300.3 USD</p>
              </Col>
              <Col id="About3col">
              <br/>
              <a id="wishListBt" >Wish List</a>
              <br/>
              <br/>
              <img className="like" src={like}/>
              </Col> */}
            </Row>

          </Card>
          <Card className="about-card">
            <h2>{t("About-h1")}</h2>
            <br/>
              <p id="t-about">{t("Goal")}</p>
          </Card>
          </div>
  </Container>
  )
}

export default About