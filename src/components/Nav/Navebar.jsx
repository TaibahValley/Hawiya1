import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import "../../assets/css/sidebar.css"
// import Logo from "../../assets/imgs/svg/Logo"
import Logo from "../../assets/imgs/logoo.png"
import Logo1 from "../../assets/imgs/llogo.svg"


function Navebar({language, changeLanguage, t}) {
  const test=(e) => {
    e.preventDefault();
    console.log(e.target.value)
  }

  return (
    <Navbar id="Navbar" >
      <Container fluid>
        <img id="logo1" src={Logo1}/>
       {/* <Logo id="logo"/> */}
       <Navbar.Brand href="#home">Hawiya</Navbar.Brand>
       {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
        <Navbar.Collapse id="navbarScroll">
          <Nav
            id= "nnv"
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', marginLeft: "20%", fontSize: "100%" }}
            navbarScroll
          >
            <Nav.Link className='nav-link' href="#header">{t("Explore")}</Nav.Link>
            <Nav.Link className='nav-link' href="#Collections">{t("Collections")}</Nav.Link>
            <Nav.Link className='nav-link' href="#roadmap">{t("Roadmap")}</Nav.Link>
            <Nav.Link className='nav-link' href="#Team">{t("Team")}</Nav.Link>
            <Nav.Link className='nav-link' href="#Contact">{t("Contact")}</Nav.Link>
          </Nav>
          { language == "en"?
          <button className="lang" onClick={() => changeLanguage('ar')}>ع</button>
          :
          <button className="lang" onClick={() => changeLanguage('en')}>en</button>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
    

  )
}

export default Navebar



    {/* <Navbar id="Navbar">
      <Container id="container" >
        <Logo id="logo"/>
        <Navbar.Brand href="#home">Hawiya</Navbar.Brand>
        <Navbar.Toggle/>

        <Navbar.Collapse className="justify-content-center">
          <Nav >
            <Nav.Link className='nav-link' href="#header">{t("Explore")}</Nav.Link>
            <Nav.Link className='nav-link' href="#Collections">{t("Collections")}</Nav.Link>
            <Nav.Link className='nav-link' href="#roadmap">{t("Roadmap")}</Nav.Link>
            <Nav.Link className='nav-link' href="#Team">{t("Team")}</Nav.Link>
            <Nav.Link className='nav-link' href="#Contact">{t("Contact")}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end" id="C-lang">
          { language == "en"?
          <button className="lang" onClick={() => changeLanguage('ar')}>ع</button>
          :
          <button className="lang" onClick={() => changeLanguage('en')}>en</button>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar> */}