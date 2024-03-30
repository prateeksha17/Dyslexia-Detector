import React, { useEffect } from 'react';
import WOW from 'wow.js';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'owl.carousel';

import img6 from '../img/VisualDiscrimination.png'
import img4 from '../img/memory.jpg'
import img5 from '../img/processingSpeed.jpg'

import feat1 from '../img/feat1.jpg'
import feat2 from '../img/feat2.jpg'
import feat3 from '../img/feat3.jpg'
import feat4 from '../img/feat4.jpg'
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
    
  
    <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}></div>
    </div>
   

 
  
 
    <div className="container-xxl py-5">
<div className="container">
    <div className="row g-5 align-items-end">
        <div className="col-lg-6">
            <div className="row g-2">
                <div className="col-6 position-relative wow fadeIn" data-wow-delay="0.7s">
                    <div className="about-experience bg-secondary rounded">
                        <h1 className="display-1 mb-0">5</h1>
                        <small className="fs-5 fw-bold">Tests</small>
                    </div>
                </div>
                <div className="col-6 wow fadeIn" data-wow-delay="0.1s">
                    <img className="img-fluid rounded" src={img6}/>
                </div>
                <div className="col-6 wow fadeIn" data-wow-delay="0.3s">
                    <img className="img-fluid rounded" src={img4}/>
                </div>
                <div className="col-6 wow fadeIn" data-wow-delay="0.5s">
                    <img className="img-fluid rounded" src={img5}/>
                </div>
            </div>
        </div>
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <p className="section-title bg-white text-start text-primary pe-3">About</p>
            <h1 className="mb-4">"Transforming Dyslexia Diagnosis"</h1>
            <p className="mb-4">Dyslexia is a neurodevelopmental disorder affecting reading, writing, and spelling abilities
despite normal intelligence. Early detection and intervention are crucial for mitigating its
impact. In this project, we propose a Dyslexia Detection Web App that utilizes machine
learning (ML) and deep learning (DL) techniques to identify potential dyslexia symptoms
based on user responses to a symptom observation survey. The web app then refers users to
healthcare professionals for further evaluation and treatment if necessary.
</p>
            {/* <div className="row g-5 pt-2 mb-5">
                <div className="col-sm-6">
                    <img className="img-fluid mb-4" src={img6} alt=""/>
                    <h5 className="mb-3">Early Intervention:
</h5>
                    <span> The web app enables early detection of dyslexia symptoms,
facilitating timely interventions and support.</span>
                </div>
                <div className="col-sm-6">
                    <img className="img-fluid mb-4" src={img6} alt=""/>
                    <h5 className="mb-3">Confidentiality:</h5>
                    <span> User data is handled with utmost care and privacy, ensuring
confidentiality and security throughout the process.</span>
                </div>
            </div> */}
            <a className="btn btn-secondary rounded-pill py-3 px-5" href="">Explore More</a>
        </div>
    </div>
</div>
</div>
  
  
<div
          className="container-fluid banner my-5 py-5 parallax-window"
          data-parallax="scroll"
          style={{
            background: "linear-gradient(to top, #5B8C51, #EDDD5E)",
            // Add other styles here
            width: "100%",
          }}
        >
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.3s">
                <div className="row g-4 align-items-center">
                  <div className="col-sm-4">
                    <img className="img-fluid rounded" src={feat1} alt="" />
                  </div>
                  <div className="col-sm-8">
                    <h2 className="text-white mb-3">
                    Referral to Healthcare Professionals:
                    </h2>
                    <p className="text-white mb-4">
                    
For individuals identified as having a high likelihood of dyslexia, provide referrals to nearby
healthcare professionals, such as educational psychologists, speech-language pathologists, or
dyslexia specialists, for further evaluation and intervention.

                    </p>
                    <a
                      className="btn btn-secondary rounded-pill py-2 px-4"
                      href=""
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <div className="row g-4 align-items-center">
                  <div className="col-sm-4">
                    <img className="img-fluid rounded" src={feat2} alt="" />
                  </div>
                  <div className="col-sm-8">
                    <h2 className="text-white mb-3">
                    Educational Resources:
                    </h2>
                    <p className="text-white mb-4">
                    
Offer a curated collection of educational resources, including online tutorials, websites, and
materials specifically designed for individuals with dyslexia.
These resources can cover topics like reading strategies, assistive technologies, and effective
learning techniques.
                    </p>
                    <a
                      className="btn btn-secondary rounded-pill py-2 px-4"
                      href=""
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.7s">
                <div className="row g-4 align-items-center">
                  <div className="col-sm-4">
                    <img className="img-fluid rounded" src={feat3} alt="" />
                  </div>
                  <div className="col-sm-8">
                    <h2 className="text-white mb-3">
                    Support Groups and Communities:
                    </h2>
                    <p className="text-white mb-4">
                   
Provide information about local or online support groups and communities for individuals
with dyslexia and their families.
Facilitate connections and discussions with others who share similar experiences.

                    </p>
                    <a
                      className="btn btn-secondary rounded-pill py-2 px-4"
                      href=""
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.9s">
                <div className="row g-4 align-items-center">
                  <div className="col-sm-4">
                    <img className="img-fluid rounded" src={feat4} alt="" />
                  </div>
                  <div className="col-sm-8">
                    <h2 className="text-white mb-3">
                    Assistive Technology Recommendations:
                    </h2>
                    <p className="text-white mb-4">
                    
Suggest assistive technologies and tools that can aid individuals with dyslexia in their
academic pursuits or daily activities.
Examples may include text-to-speech software, speech recognition tools, and specialized
reading/writing applications.
                    </p>
                    <a
                      className="btn btn-secondary rounded-pill py-2 px-4"
                      href=""
                    >
                      Read More
                    </a>
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

export default About;


