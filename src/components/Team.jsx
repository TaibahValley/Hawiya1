import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import discord from "../assets/imgs/discord.png"
import telegram from "../assets/imgs/telegram.png"
import "../assets/css/style.css"

export default function Team({t}) {
  return (
    <Container className="section" id="Team">
      <Row>
        <h1>{t("ourTeam")}</h1>
        <div id="line-t"></div>
        <p>{t("team")}</p>
      </Row>
      <br/>
      <Row id="teamBrow">
        <h3 className='t-team'>{t("Blockchain")}</h3>
        <h3 className='t-team'>{t("Polygon")}</h3>
      </Row>
  </Container>
  )
}
