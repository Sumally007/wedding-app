import React from 'react'
import Navigation from './Navigation/Navigation'
import Header from './Header/Header'
import Hero from './Hero/Hero'
import Main from './Main/Main'
import HowItWorks from './HowItWorks/HowItWorks'
import Accordion from './Accordion/Accordion'
import { AccordionData } from './Accordion/AccordionData'


const App = () => {
  return (<>
    <Navigation />
    <Header />
    <Hero />
    <Main />
    <HowItWorks />
    <Accordion />
  </>
  )
}

export default App