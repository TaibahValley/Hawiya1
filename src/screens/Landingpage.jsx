import React, {useState} from 'react'
import { withNamespaces } from 'react-i18next';
import i18n from '../i18n';


//components
import Navebar from '../components/Nav/Navebar'
import Navebar2 from '../components/Nav/Navebar2'
import Header from '../components/Header'
import About from '../components/About'
import Collection from '../components/Collection'
import Roadmap from '../components/Roadmap'
import Team from '../components/Team'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { loadLanguages } from 'i18next';


function Landingpage({t}) {
  const [language, setLanguage] = useState("en")
  console.log(language)
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setLanguage(lng)
    console.log(lng)
    }

  return (
    <>
        <Navebar changeLanguage={changeLanguage} t={t} language={language}/>
        <Navebar2 changeLanguage={changeLanguage} t={t} language={language}/>
        {/* <Sidebar t={t}/> */}
        <Header t={t}/>
        <About t={t}/>
        <Collection t={t}/>
        <Roadmap t={t} language={language}/>
        <Team t={t}/>
        <Contact t={t}/>
        <Footer t={t}/>
    </>
  )
}

export default withNamespaces()(Landingpage);