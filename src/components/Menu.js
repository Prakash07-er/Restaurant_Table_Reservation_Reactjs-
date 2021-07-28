import React from 'react'
import '../style/menu.css'

export default function Menu() {
    return (
        <section id="menu" class="menu section-bg">
        <div class="container" data-aos="fade-up">
  
          <div class="section-title">
            <h2>Menu</h2>
            <p>Check Our Tasty Menu</p>
          </div>
  
          <div class="row" data-aos="fade-up" data-aos-delay="100">
            <div class="col-lg-12 d-flex justify-content-center">
              <ul id="menu-flters">
                <li data-filter="*" class="filter-active">All</li>
                <li data-filter=".filter-starters">Starters</li>
                <li data-filter=".filter-salads">Salads</li>
                <li data-filter=".filter-specialty">Specialty</li>
              </ul>
            </div>
          </div>
  
          <div class="row menu-container" data-aos="fade-up" data-aos-delay="200">
  
            <div class="col-lg-6 menu-item filter-starters">
              <img src="https://res.cloudinary.com/dj0pjewbs/image/upload/v1625224688/lobster-bisque_geuemb.jpg" class="menu-img" alt="" />
              <div class="menu-content">
                <a href="#">Lobster Bisque</a><span>$5.95</span>
              </div>
              <div class="menu-ingredients">
                Lorem, deren, trataro, filede, nerada
              </div>
            </div>
  
            <div class="col-lg-6 menu-item filter-specialty">
              <img src="https://res.cloudinary.com/dj0pjewbs/image/upload/v1625224709/bread-barrel_upojcb.jpg" class="menu-img" alt="" />
              <div class="menu-content">
                <a href="#">Bread Barrel</a><span>$6.95</span>
              </div>
              <div class="menu-ingredients">
                Lorem, deren, trataro, filede, nerada
              </div>
            </div>
  
            <div class="col-lg-6 menu-item filter-starters">
              <img src="https://res.cloudinary.com/dj0pjewbs/image/upload/v1625224708/cake_ksisd9.jpg" class="menu-img" alt="" />
              <div class="menu-content">
                <a href="#">Crab Cake</a><span>$7.95</span>
              </div>
              <div class="menu-ingredients">
                A delicate crab cake served on a toasted roll with lettuce and tartar sauce
              </div>
            </div>
  
            <div class="col-lg-6 menu-item filter-salads">
              <img src="https://res.cloudinary.com/dj0pjewbs/image/upload/v1625224708/caesar_k0wgnb.jpg" class="menu-img" alt="" />
              <div class="menu-content">
                <a href="#">Caesar Selections</a><span>$8.95</span>
              </div>
              <div class="menu-ingredients">
                Lorem, deren, trataro, filede, nerada
              </div>
            </div>
  
            <div class="col-lg-6 menu-item filter-specialty">
              <img src="https://res.cloudinary.com/dj0pjewbs/image/upload/v1625224709/tuscan-grilled_upwctm.jpg" class="menu-img" alt="" />
              <div class="menu-content">
                <a href="#">Tuscan Grilled</a><span>$9.95</span>
              </div>
              <div class="menu-ingredients">
                Grilled chicken with provolone, artichoke hearts, and roasted red pesto
              </div>
            </div>
  
            <div class="col-lg-6 menu-item filter-starters">
              <img src="https://res.cloudinary.com/dj0pjewbs/image/upload/v1625224708/mozzarella_urafgz.jpg" class="menu-img" alt="" />
              <div class="menu-content">
                <a href="#">Mozzarella Stick</a><span>$4.95</span>
              </div>
              <div class="menu-ingredients">
                Lorem, deren, trataro, filede, nerada
              </div>
            </div>
  
            <div class="col-lg-6 menu-item filter-salads">
              <img src="https://res.cloudinary.com/dj0pjewbs/image/upload/v1625224708/greek-salad_rdggei.jpg" class="menu-img" alt="" />
              <div class="menu-content">
                <a href="#">Greek Salad</a><span>$9.95</span>
              </div>
              <div class="menu-ingredients">
                Fresh spinach, crisp romaine, tomatoes, and Greek olives
              </div>
            </div>
  
            <div class="col-lg-6 menu-item filter-salads">
              <img src="https://res.cloudinary.com/dj0pjewbs/image/upload/v1625224709/spinach-salad_yiqmqa.jpg" class="menu-img" alt="" />
              <div class="menu-content">
                <a href="#">Spinach Salad</a><span>$9.95</span>
              </div>
              <div class="menu-ingredients">
                Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette
              </div>
            </div>
  
            <div class="col-lg-6 menu-item filter-specialty">
              <img src="https://res.cloudinary.com/dj0pjewbs/image/upload/v1625224708/lobster-roll_yvpoqy.jpg" class="menu-img" alt="" />
              <div class="menu-content">
                <a href="#">Lobster Roll</a><span>$12.95</span>
              </div>
              <div class="menu-ingredients">
                Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll
              </div>
            </div>
  
          </div>
  
        </div>
      </section>
    )
}
