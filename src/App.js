import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import WhyUs from './components/WhyUs'
import Menu from './components/Menu'
import Special from './components/Special'
import Booktable from './components/Booktable'
import Gallery from './components/Gallery'
import Chefs from './components/Chefs'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>

        <Header />
        <Hero />  

        <main id="main">
            <About />
            <WhyUs />
            <Menu />
            <Special />
            <Booktable />
            <Gallery />
            <Chefs />
            <Contact />
        </main>
        <Footer />
       <div id="preloader"></div>
          <a href="#" class="back-to-top d-flex align-items-center justify-content-center">
          <i class="fas fa-arrow-up"></i>
          </a>
    </div>
  )
}
