import React from 'react'
import Navigation from './Components/Navigation/Navigation'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Main from './Components/Main/Main'
import HowItWorks from './Components/HowItWorks/HowItWorks'
import Accordion from './Components/Accordion/Accordion'
import { AccordionData } from './Components/Accordion/AccordionData'
import Started from './Components/Started/Started'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (<>
    <Navigation />
    <Header />
    <Hero />
    <Main />
    <HowItWorks />
    <Accordion />
    <Started />
    <Footer />
  </>
  )
}

export default App