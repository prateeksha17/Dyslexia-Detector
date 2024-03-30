import React, { useEffect } from 'react';
import WOW from 'wow.js';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'owl.carousel';

import frame1 from '../img/frame1.jpg';
import frame2 from '../img/frame2.jpg';
import frame3 from '../img/frame3.jpg';
import frame4 from '../img/frame4.jpg';
import Footer from '../Components/Footer';
const Feature = () => {
  useEffect(() => {
    // Spinner
    const spinner = () => {
      setTimeout(() => {
        const spinnerElement = document.getElementById('spinner');
        if (spinnerElement) {
          spinnerElement.classList.remove('show');
        }
      }, 1);
    };
    spinner();

    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    const stickyNavbar = () => {
      window.addEventListener('scroll', () => {
        const stickyNav = document.querySelector('.sticky-top');
        if (window.scrollY > 300) {
          stickyNav.classList.add('shadow-sm');
          stickyNav.style.top = '0px';
        } else {
          stickyNav.classList.remove('shadow-sm');
          stickyNav.style.top = '-100px';
        }
      });
    };
    stickyNavbar();

    // Back to top button
    const backToTop = () => {
      window.addEventListener('scroll', () => {
        const backToTopButton = document.querySelector('.back-to-top');
        if (window.scrollY > 300) {
          backToTopButton.style.display = 'block';
        } else {
          backToTopButton.style.display = 'none';
        }
      });
      const scrollToTop = () => {
        const scrollDuration = 1500;
        const scrollStep = -window.scrollY / (scrollDuration / 15);
        const scrollInterval = setInterval(() => {
          if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
          } else {
            clearInterval(scrollInterval);
          }
        }, 15);
      };
      document.querySelector('.back-to-top').addEventListener('click', scrollToTop);
    };
    backToTop();

    // Facts counter
    const counterUp = () => {
      const counterElements = document.querySelectorAll('[data-toggle="counter-up"]');
      counterElements.forEach(counterElement => {
        const target = +counterElement.getAttribute('data-target');
        const duration = +counterElement.getAttribute('data-duration');
        const step = Math.ceil(target / (duration / 15));
        let count = 0;
        const counterInterval = setInterval(() => {
          count += step;
          counterElement.innerText = count;
          if (count >= target) {
            clearInterval(counterInterval);
            counterElement.innerText = target;
          }
        }, 15);
      });
    };
    counterUp();

    // Testimonials carousel
    const testimonialCarousel = () => {
      const testimonialCarouselElement = document.querySelector('.testimonial-carousel');
      if (testimonialCarouselElement) {
        new OwlCarousel(testimonialCarouselElement, {
          autoplay: true,
          smartSpeed: 1000,
          items: 1,
          dots: false,
          loop: true,
          nav: true,
          navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
          ]
        });
      }
    };
    testimonialCarousel();
  }, []);

  return (
    <div>
      
    <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}></div>
    </div>

 
   
  
    <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <p className="section-title bg-white text-start text-primary pe-3">
                  Features
                </p>
                <h1 className="mb-4">Few Reasons Why People Choosing Us!</h1>
                <p className="mb-4"></p>
                <p>
                  <i className="fa fa-check text-primary me-3"></i>Early
                  Intervention: The web app enables early detection of dyslexia
                  symptoms, facilitating timely interventions and support.
                </p>
                <p>
                  <i className="fa fa-check text-primary me-3"></i>
                  User-Friendly: With a simple interface and intuitive design,
                  the web app is accessible to users of all backgrounds and
                  ages.
                </p>
                <p>
                  <i className="fa fa-check text-primary me-3"></i>
                  Confidentiality: User data is handled with utmost care and
                  privacy, ensuring confidentiality and security throughout the
                  process.
                </p>
                <a
                  className="btn btn-secondary rounded-pill py-3 px-5 mt-3"
                  href=""
                >
                  Explore More
                </a>
              </div>
              <div className="col-lg-6">
                <div className="rounded overflow-hidden">
                  <div className="row g-0">
                    <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                      <div className="text-center bg-primary py-5 px-4">
                        <img className="img-fluid mb-4" src={frame1} alt="" />
                       
                      </div>
                    </div>
                    <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                      <div className="text-center bg-secondary py-5 px-4">
                        <img className="img-fluid mb-4" src={frame2} alt="" />
                        {/* <h1 className="display-6" data-toggle="counter-up">
                          183
                        </h1>
                        <span className="fs-5 fw-semi-bold text-primary">
                          Award Winning
                        </span> */}
                      </div>
                    </div>
                    <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                      <div className="text-center bg-secondary py-5 px-4">
                        <img className="img-fluid mb-4" src={frame3} alt="" />
                        
                      </div>
                    </div>
                    <div className="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                      <div className="text-center bg-primary py-5 px-4">
                        <img className="img-fluid mb-4" src={frame4} alt="" />
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
  
   <Footer/>
    
    
   
    <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up"></i></a>



   
   

    </div>
  );
};

export default Feature;








