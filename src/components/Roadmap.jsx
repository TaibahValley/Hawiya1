import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Roadmap1 from "../assets/imgs/svg/Roadmap.svg"
import RoadmapA from "../assets/imgs/svg/Roadmap-a.svg"
import paint from "../assets/imgs/paint.png"
import "../assets/css/style.css"

export default function Roadmap({language, t}) {
console.log("bbbb:"+t)
  return (
    <div id="roadmap">
      <h1 id="t-roadmap">{t("Roadmap")}</h1>
      <div id="line-r"></div>
      <br/>
      <div className='raodmap-cols'>
        {language=="en"?
        <img id="i-roadmap" src={Roadmap1}/>
        :
        <img id="i-roadmap" src={RoadmapA}/>
      }
      </div>
  </div>
  )

}
