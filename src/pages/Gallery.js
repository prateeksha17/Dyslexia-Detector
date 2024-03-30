import React, { useEffect } from 'react';
import WOW from 'wow.js';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'owl.carousel';
import p1 from '../img/image1.jpg';
import p2 from '../img/image2.jpg';
import p3 from '../img/image3.jpg';
import p4 from '../img/image4.jpg';
import p5 from '../img/image5.jpg';
import p6 from '../img/image6.jpg';
import p7 from '../img/image7.jpg';
import p8 from '../img/image8.jpg';
import Footer from '../Components/Footer';


const Gallery = () => {
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
   

 
  
   
    <div className="container-xxl py-5 px-0">
          <div className="row g-0">
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="row g-0">
                <div className="col-12">
                  <a
                    className="d-block"
                    href={p5}
                    data-lightbox="gallery"
                  >
                    <img className="img-fluid" src={p5} alt="" />
                  </a>
                </div>
                <div className="col-12">
                  <a
                    className="d-block"
                    href={p1}
                    data-lightbox="gallery"
                  >
                    <img className="img-fluid" src={p1} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="row g-0">
                <div className="col-12">
                  <a
                    className="d-block"
                    href={p2}
                    data-lightbox="gallery"
                  >
                    <img className="img-fluid" src={p2} alt="" />
                  </a>
                </div>
                <div className="col-12">
                  <a
                    className="d-block"
                    href={p6}
                    data-lightbox="gallery"
                  >
                    <img className="img-fluid" src={p6} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="row g-0">
                <div className="col-12">
                  <a
                    className="d-block"
                    href={p7}
                    data-lightbox="gallery"
                  >
                    <img className="img-fluid" src={p7} alt="" />
                  </a>
                </div>
                <div className="col-12">
                  <a
                    className="d-block"
                    href={p3}
                    data-lightbox="gallery"
                  >
                    <img className="img-fluid" src={p3} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="row g-0">
                <div className="col-12">
                  <a
                    className="d-block"
                    href={p4}
                    data-lightbox="gallery"
                  >
                    <img className="img-fluid" src={p4} alt="" />
                  </a>
                </div>
                <div className="col-12">
                  <a
                    className="d-block"
                    href={p8}
                    data-lightbox="gallery"
                  >
                    <img className="img-fluid" src={p8} alt="" />
                  </a>
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

export default Gallery;




