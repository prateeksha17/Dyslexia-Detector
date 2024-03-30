import React, { useEffect } from 'react';
import WOW from 'wow.js';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'owl.carousel';
import Footer from '../Components/Footer';


const Contact = () => {
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
            <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                <p className="section-title bg-white text-center text-primary px-3">Contact Us</p>
                <h1 className="mb-5">If You Have Any Query, Please Contact Us</h1>
            </div>
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <h3 className="mb-4">Mail Us.</h3>
                    <p className="mb-4">For any queries feel free to mail us. </p>
                    {/* <a href="https://htmlcodex.com/contact-form">Download Now</a>. */}
                    <form>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                                    <label for="name">Your Name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                                    <label for="email">Your Email</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                                    <label for="subject">Subject</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: '250px' }}></textarea>
                                    <label for="message">Message</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-secondary rounded-pill py-3 px-5" type="submit">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <h3 className="mb-4">Contact Details</h3>
                    <div className="d-flex border-bottom pb-3 mb-3">
                        <div className="flex-shrink-0 btn-square bg-secondary rounded-circle">
                            <i className="fa fa-map-marker-alt text-body"></i>
                        </div>
                        <div className="ms-3">
                            <h6>Our Office</h6>
                            <span>............</span>
                        </div>
                    </div>
                    <div className="d-flex border-bottom pb-3 mb-3">
                        <div className="flex-shrink-0 btn-square bg-secondary rounded-circle">
                            <i className="fa fa-phone-alt text-body"></i>
                        </div>
                        <div className="ms-3">
                            <h6>Call Us</h6>
                            <span>+012 345 67890</span>
                        </div>
                    </div>
                    <div className="d-flex border-bottom-0 pb-3 mb-3">
                        <div className="flex-shrink-0 btn-square bg-secondary rounded-circle">
                            <i className="fa fa-envelope text-body"></i>
                        </div>
                        <div className="ms-3">
                            <h6>Mail Us</h6>
                            <span>info@example.com</span>
                        </div>
                    </div>

                    <iframe className="w-100 rounded"
                    src="https://www.google.com/maps/d/embed?mid=1PRNsTVTx_mxFS944bTNCFZldOoI&hl=en&ehbc=2E312F"
                    frameBorder="0" style={{ minHeight: '300px', border: '0' }} allowFullScreen="" aria-hidden="false"
                    tabIndex="0"></iframe>
                </div>
            </div>
        </div>
    </div>
   
 
   <Footer/>
   
   

    <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up"></i></a>



   
</div>
  );
};

export default Contact;






