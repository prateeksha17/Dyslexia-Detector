import React, { useEffect } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "parallax-js"; // Import parallax-js
import $ from "jquery";
import WOW from "wow.js";
import "owl.carousel";
import img2 from "../img/AuditoryDiscrimination.jpg";
import img3 from "../img/LanguageSkills.jpg";
import img4 from "../img/memory.jpg";
import img5 from "../img/processingSpeed.jpg";
import img6 from "../img/VisualDiscrimination.png";

import frame1 from '../img/frame1.jpg';
import frame2 from '../img/frame2.jpg';
import frame3 from '../img/frame3.jpg';
import frame4 from '../img/frame4.jpg';

import "../lib/animate/animate.css";
import Footer from "../Components/Footer";

const Home = () => {
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

      // Back to top button
      const backToTop = () => {
        window.addEventListener("scroll", () => {
          const backToTopButton = document.querySelector(".back-to-top");
          if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
          } else {
            backToTopButton.style.display = "none";
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
        document
          .querySelector(".back-to-top")
          .addEventListener("click", scrollToTop);
      };
      backToTop();

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
        <div className="container-fluid px-0 mb-5">
          <div
            id="header-carousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  style={{
                    maxWidth: "80vw",
                    maxHeight: "80vh",
                    width: "auto",
                    height: "auto",
                  }}
                  className="w-80"
                  src={img3}
                  alt="Image"
                />
                <div className="carousel-caption">
                  <div className="container">
                    <div className="row justify-content-end">
                      <div className="col-lg-8 text-end">
                        <p className="fs-4 text-white">Dyslexia Detection</p>
                        <h1 className="display-1 text-white mb-5 animated slideInRight">
                          "Unlocking Potential Through Understanding"
                        </h1>
                        {/* <a href="" className="btn btn-secondary rounded-pill py-3 px-5 animated slideInRight">Take Test</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img className="w-80" src={img2} alt="Image" />
                <div className="carousel-caption">
                  <div className="container">
                    <div className="row justify-content-end">
                      <div className="col-lg-8 text-end">
                        <p className="fs-4 text-white">Dyslexia Detection</p>
                        <h1 className="display-1 text-white mb-5 animated slideInRight">
                          "Aiding Reading Challenges with Technology"
                        </h1>
                        {/* <a href="" className="btn btn-secondary rounded-pill py-3 px-5 animated slideInLeft">Take Test</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5 align-items-end">
              <div className="col-lg-6">
                <div className="row g-2">
                  <div
                    className="col-6 position-relative wow fadeIn"
                    data-wow-delay="0.7s"
                  >
                    <div className="about-experience bg-secondary rounded">
                      <h1 className="display-1 mb-0">5</h1>
                      <small className="fs-5 fw-bold">Tests</small>
                    </div>
                  </div>
                  <div className="col-6 wow fadeIn" data-wow-delay="0.1s">
                    <img className="img-fluid rounded" src={img6} />
                  </div>
                  <div className="col-6 wow fadeIn" data-wow-delay="0.3s">
                    <img className="img-fluid rounded" src={img4} />
                  </div>
                  <div className="col-6 wow fadeIn" data-wow-delay="0.5s">
                    <img className="img-fluid rounded" src={img5} />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <p className="section-title bg-white text-start text-primary pe-3">
                  About
                </p>
                <h1 className="mb-4">"Transforming Dyslexia Diagnosis"</h1>
                <p className="mb-4">
                  Dyslexia is a neurodevelopmental disorder affecting reading,
                  writing, and spelling abilities despite normal intelligence.
                  Early detection and intervention are crucial for mitigating
                  its impact. In this project, we propose a Dyslexia Detection
                  Web App that utilizes machine learning (ML) and deep learning
                  (DL) techniques to identify potential dyslexia symptoms based
                  on user responses to a symptom observation survey. The web app
                  then refers users to healthcare professionals for further
                  evaluation and treatment if necessary.
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
                <a className="btn btn-secondary rounded-pill py-3 px-5" href="">
                  Explore More
                </a>
              </div>
            </div>
          </div>
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
                      <i className="bi bi-chevron-double-right"></i>
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

export default Home;
