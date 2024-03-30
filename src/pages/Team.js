import React, { useEffect } from 'react';
import WOW from 'wow.js';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'owl.carousel';
import Footer from '../Components/Footer';


const About = () => {
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
   
    <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}></div>
    </div>
   
   
  
   
 
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                <p class="section-title bg-white text-center text-primary px-3">Our Team</p>
                <h1 class="mb-5">Experienced Team Members</h1>
            </div>
            <div class="row g-4">
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="team-item rounded p-4">
                        <img class="img-fluid rounded mb-4" src="img/team-1.jpg" alt=""/>
                        <h5>Dhanush</h5>
                        <p class="text-primary">Role</p>
                        <div class="d-flex justify-content-center">
                            <a class="btn btn-square btn-outline-secondary rounded-circle mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-square btn-outline-secondary rounded-circle mx-1" href=""><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-square btn-outline-secondary rounded-circle mx-1" href=""><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="team-item rounded p-4">
                        <img class="img-fluid rounded mb-4" src="img/team-2.jpg" alt=""/>
                        <h5>Bhawesh</h5>
                        <p class="text-primary">Role</p>
                        <div class="d-flex justify-content-center">
                            <a class="btn btn-square btn-outline-secondary rounded-circle mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-square btn-outline-secondary rounded-circle mx-1" href=""><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-square btn-outline-secondary rounded-circle mx-1" href=""><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="team-item rounded p-4">
                        <img class="img-fluid rounded mb-4" src="img/team-3.jpg" alt=""/>
                        <h5>Prateeksha</h5>
                        <p class="text-primary">Role</p>
                        <div class="d-flex justify-content-center">
                            <a class="btn btn-square btn-outline-secondary rounded-circle mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-square btn-outline-secondary rounded-circle mx-1" href=""><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-square btn-outline-secondary rounded-circle mx-1" href=""><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

   <Footer/>
   

    <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i class="bi bi-arrow-up"></i></a>


   </div>
  );
};

export default About;


