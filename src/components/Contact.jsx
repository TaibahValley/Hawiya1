import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import discord from "../assets/imgs/discord.png"
import telegram from "../assets/imgs/telegram.png"
import "../assets/css/style.css"
function Contact({t}) {
  return (
    <Container className="section" id="Contact">
      <div >
        <h2>{t("Community")}</h2>
        <h3>{t("Join")}</h3>

      <Row>
        <div className='contact-cols'>
        <img src={discord} className="social"/>
        <a href="https://discord.com/" className='t-social'>{t("Discord")}</a>
      </div>
      <div className='contact-cols'>
        <img src={telegram} className="social"/>
        <a href="https://web.telegram.org/z/" className='t-social'>{t("Telegram")}</a>
      </div>
      </Row>
      </div>
  </Container>
  )
}

export default Contact