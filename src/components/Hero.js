import React from 'react'
import '../style/hero.css'

export default function Hero() {
    return (
        <section id="hero" class="d-flex align-items-center">
        <div class="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
          <div class="row">
            <div class="col-lg-8">
              <h1>Welcome to <span>CHILLIS</span></h1>
              <h2>Delivering great food for more than 18 years!</h2>
    
              <div class="btns">
                <a href="#menu" class="btn-menu animated fadeInUp scrollto">Our Menu</a>
                <a href="#book-a-table" class="btn-book animated fadeInUp scrollto">Book a Table</a>
              </div>
            </div>
            <div class="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200">
              <a href="https://www.youtube.com/watch?v=GlrxcuEDyF8" class="glightbox play-btn" target="_blank"></a>
            </div>
    
          </div>
        </div>
      </section>
    )
}
