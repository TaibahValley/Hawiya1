import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import SattamImg from "../assets/imgs/sattam.png"
import "../assets/css/style.css"
import TypeWriterEffect from 'react-typewriter-effect';
function Header({t}) {
  return (

    <Container className="section" id="header">
      <Row id="header-row">
        <Col xs={7} id="header-col">
        <h1>{t("H1")}</h1>
        <h2>{t("H2")}</h2>
            <div id="line-h"></div>
            <p>{t("Partner")}</p>
            <a id="Partnership-b" href="mailto:my_email@gmail.com" >{t("PartnerB")}</a>
        </Col>
        {/* <Col>
            <img className="sattamImg " src={SattamImg} alt="sattam" />
        </Col> */}
      </Row>
    </Container>

  )
}

export default Header

