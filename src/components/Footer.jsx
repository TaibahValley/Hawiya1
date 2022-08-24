import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import tezos from "../assets/imgs/tezos2.png"
import footer from "../assets/imgs/svg/Footer.svg"
import buts from "../assets/imgs/buts.svg"
import footerr from "../assets/imgs/svg/footerr.svg"
import "../assets/css/style.css"
import emailjs from 'emailjs-com'

function Footer({t}) {

  const emailSubscriptions =(e)=> {
    e.preventDefault();
    emailjs.sendForm('service_gup8j4d', 'template_fsl1fri',   e.target, 'AmB4HNrI3mMztlVTG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <div id="footer-box">
      <div>
        <img id="green-img" src={footerr}/>
      </div>


    <Container id="footer" className="section">
      <div>
        <p>NFT <span>Hawiya</span></p>
        <p>{t("Footer")}</p>
        {/* <img src={tezos} id="f-tezos"/> */}
      </div>
      <div>
        <h5>{t("Subscribe")}</h5>
        <p>{t("Subscribe1")}</p><br/>
        <form className="contact-form" onSubmit={emailSubscriptions}>
            <input id="sub-input" type="email" name="email"  placeholder="Enter your email here..."/>
            <button id="subscribeBtn" type="submit">{t("SubscribeB")}</button>
        </form>
      </div>
    </Container>

    
  </div>
  )
}

export default Footer