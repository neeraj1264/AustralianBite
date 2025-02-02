import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./About.css";
import Header from "../header/Header";
import HomeFooter from "../footer/HomeFooter";

const About = () => {
  const location = useLocation();

  return (
<>
      {location.pathname === "/about" && <Header />}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
        <h5 className="about-title" id="about">
              About Us
            </h5>
          {/* Image Grid */}
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6 text-start">
                <img
                  className="img-fluid rounded w-100 wow zoomIn"
                  data-wow-delay="0.1s"
                  src="./img/about-1.jpg"
                  alt="About 1"
                />
              </div>
              <div className="col-6 text-start">
                <img
                  className="img-fluid rounded w-75 wow zoomIn"
                  data-wow-delay="0.3s"
                  src="./img/about-2.jpg"
                  alt="About 2"
                  style={{ marginTop: "25%" }}
                />
              </div>
              <div className="col-6 text-end">
                <img
                  className="img-fluid rounded w-75 wow zoomIn"
                  data-wow-delay="0.5s"
                  src="./img/about-3.jpg"
                  alt="About 3"
                />
              </div>
              <div className="col-6 text-end">
                <img
                  className="img-fluid rounded w-100 wow zoomIn"
                  data-wow-delay="0.7s"
                  src="./img/about-4.jpg"
                  alt="About 4"
                />
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="col-lg-6">

            <h1 className="mb-4 welcome">
              Welcome to <i className="fa fa-utensils me-2"></i>Australian Bite
            </h1>
            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam
              amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
            </p>
            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam
              amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
              clita duo justo magna dolore erat amet.
            </p>

            {/* Experience and Chefs Count */}
            <div className="row g-4 mb-4">
              <div className="col-sm-6">
                <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                  <h1 className="flex-shrink-0 display-5 text-primary mb-0">15</h1>
                  <div className="ps-4">
                    <p className="mb-0">Years of</p>
                    <h6 className="text-uppercase mb-0">Experience</h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                  <h1 className="flex-shrink-0 display-5 text-primary mb-0">50</h1>
                  <div className="ps-4">
                    <p className="mb-0">Popular</p>
                    <h6 className="text-uppercase mb-0">Master Chefs</h6>
                  </div>
                </div>
              </div>
            </div>

            {/* Read More Button */}
            <Link className="btn btn-primary py-3 px-5 mt-2" to="/about">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
    {location.pathname === "/about" && <HomeFooter />}
    </>
  );
};

export default About;
