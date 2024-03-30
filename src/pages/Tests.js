import React, { useEffect } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import "parallax-js"; // Import parallax-js
import $ from "jquery";
import WOW from "wow.js";
import "owl.carousel";
import img2 from "../img/AuditoryDiscrimination.jpg";
import img3 from "../img/LanguageSkills.jpg";
import img4 from "../img/memory.jpg";
import img5 from "../img/processingSpeed.jpg";
import img6 from "../img/VisualDiscrimination.png";



import "../lib/animate/animate.css";
import Footer from "../Components/Footer";

const Tests = () => {
  useEffect(() => {
    // Initialize parallax effect
    try {
      $('[data-parallax="scroll"]').parallax();
      // Initialize WOW.js
      new WOW().init();

      // Sticky Navbar
      const stickyNavbar = () => {
        window.addEventListener("scroll", () => {
          const stickyNav = document.querySelector(".sticky-top");
          if (window.scrollY > 300) {
            stickyNav.classList.add("shadow-sm");
            stickyNav.style.top = "0px";
          } else {
            stickyNav.classList.remove("shadow-sm");
            stickyNav.style.top = "-100px";
          }
        });
      };
      stickyNavbar();

    
      // Facts counter
      const counterUp = () => {
        const counterElements = document.querySelectorAll(
          '[data-toggle="counter-up"]'
        );
        counterElements.forEach((counterElement) => {
          const target = +counterElement.getAttribute("data-target");
          const duration = +counterElement.getAttribute("data-duration");
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
        const testimonialCarouselElement = document.querySelector(
          ".testimonial-carousel"
        );
        if (testimonialCarouselElement) {
          $(".testimonial-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            items: 1,
            dots: false,
            loop: true,
            nav: true,
            navText: [
              '<i class="bi bi-chevron-left"></i>',
              '<i class="bi bi-chevron-right"></i>',
            ],
          });
        }
      };
      testimonialCarousel();
    } catch (error) {
      console.error("Error initializing parallax:", error);
    }
  }, []);

  return (
    <div>
      <div>
         

        <div className="container-xxl py-5">
          <div className="container">
            <div
              className="text-center mx-auto pb-4 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: "500px" }}
            >
              <p className="section-title bg-white text-center text-primary px-3">
                Our Tests
              </p>
              <h1 className="mb-5">What We Offer?</h1>
            </div>
            <div className="row gy-5 gx-4">
              <div
                className="col-lg-4 col-md-6 pt-5 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="service-item d-flex h-100">
                  <div className="service-img">
                    <img className="img-fluid" src={img3} alt="" />
                  </div>
                  <div className="service-text p-5 pt-0">
                    <div className="service-icon">
                      <img
                        className="img-fluid rounded-circle"
                        src={img3}
                        alt=""
                      />
                    </div>
                    <h5 className="mb-3">Language Skills:</h5>
                    <p className="mb-4">
                      {" "}
                      This feature likely represents an individual's proficiency
                      or ability in language and vocabulary-related tasks
                    </p>
                    <a className="btn btn-square rounded-circle" href="">
                      <Link to='/langSkills'><i className="bi bi-chevron-double-right"></i></Link>
                    
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 pt-5 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="service-item d-flex h-100">
                  <div className="service-img">
                    <img className="img-fluid" src={img4} alt="" />
                  </div>
                  <div className="service-text p-5 pt-0">
                    <div className="service-icon">
                      <img
                        className="img-fluid rounded-circle"
                        src={img4}
                        alt=""
                      />
                    </div>
                    <h5 className="mb-3">Memory:</h5>
                    <p className="mb-4">
                      {" "}
                      This feature may indicate an individual's memory
                      capabilities, which could be relevant to learning and
                      cognitive processing
                    </p>
                    <a className="btn btn-square rounded-circle" href="">
                      <i className="bi bi-chevron-double-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 pt-5 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="service-item d-flex h-100">
                  <div className="service-img">
                    <img className="img-fluid" src={img5} alt="" />
                  </div>
                  <div className="service-text p-5 pt-0">
                    <div className="service-icon">
                      <img
                        className="img-fluid rounded-circle"
                        src={img5}
                        alt=""
                      />
                    </div>
                    <h5 className="mb-3">Processing Speed:</h5>
                    <p className="mb-4">
                      {" "}
                      This feature might represent how quickly an individual can
                      process information or complete tasks, which could be
                      pertinent to reading fluency and comprehension
                    </p>
                    <a className="btn btn-square rounded-circle" href="">
                      <i className="bi bi-chevron-double-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 pt-5 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="service-item d-flex h-100">
                  <div className="service-img">
                    <img className="img-fluid" src={img6} alt="" />
                  </div>
                  <div className="service-text p-5 pt-0">
                    <div className="service-icon">
                      <img
                        className="img-fluid rounded-circle"
                        src={img6}
                        alt=""
                      />
                    </div>
                    <h5 className="mb-3">Visual Discrimination:</h5>
                    <p className="mb-4">
                      {" "}
                      This feature likely relates to an individual's ability to
                      distinguish and interpret visual stimuli, which could be
                      important for recognizing letters and words.
                    </p>
                    <a className="btn btn-square rounded-circle" href="">
                      <i className="bi bi-chevron-double-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 pt-5 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="service-item d-flex h-100">
                  <div className="service-img">
                    <img className="img-fluid" src={img2} alt="" />
                  </div>
                  <div className="service-text p-5 pt-0">
                    <div className="service-icon">
                      <img
                        className="img-fluid rounded-circle"
                        src={img2}
                        alt=""
                      />
                    </div>
                    <h5 className="mb-3">Audio Discrimination: </h5>
                    <p className="mb-4">
                      {" "}
                      This feature may indicate an individual's ability to
                      discern and process auditory information, which could be
                      relevant for phonological awareness and language
                      processing.
                    </p>
                    <a className="btn btn-square rounded-circle" href="">
                      <i className="bi bi-chevron-double-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      
   <Footer/>
        <a
          href="#"
          className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
        >
          <i className="bi bi-arrow-up"></i>
        </a>
      </div>
    </div>
  );
};

export default Tests;
