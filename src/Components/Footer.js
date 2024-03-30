import React, { useEffect } from 'react';
import WOW from 'wow.js';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'owl.carousel';


const Footer = () => {
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
    <div className="container-fluid bg-dark footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-white mb-4">Follow Us:</h5>
                                    <div className="d-flex pt-3">
                        <a className="btn btn-square btn-secondary rounded-circle me-2" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-square btn-secondary rounded-circle me-2" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square btn-secondary rounded-circle me-2" href=""><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-square btn-secondary rounded-circle me-2" href=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-white mb-4">Quick Links</h5>
                    <a className="btn btn-link" href="">About Us</a>
                    <a className="btn btn-link" href="">Contact Us</a>
                    
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-white mb-4">Business Hours</h5>
                    <p className="mb-1">Monday - Friday</p>
                    <h6 className="text-light">09:00 am - 07:00 pm</h6>
                   
                   
                </div>
                <div className="col-lg-3 col-md-6">
                 
                    <p>Feel free to connect wih us.</p>
                    <div className="position-relative w-100">
                        <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                        <button type="button" className="btn btn-secondary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;






