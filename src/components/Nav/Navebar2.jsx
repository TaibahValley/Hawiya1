import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import "../../assets/css/sidebar.css"
import Logo from "../../assets/imgs/svg/Logo"


function Navebar2({language, changeLanguage, t}) {
  const test=(e)=>{
    e.preventDefault();
    console.log(e.target.value)
  }
  return (
    <Navbar id="Navbar2">
      <Container >
        <Navbar.Collapse className="justify-content-start">
          {language == "en"?
          <button className="lang" onClick={() => changeLanguage('ar')}>ع</button>
          :
          <button className="lang" onClick={() => changeLanguage('en')}>en</button>
        }
        </Navbar.Collapse>
      </Container>
</Navbar>

  )
}

export default Navebar2