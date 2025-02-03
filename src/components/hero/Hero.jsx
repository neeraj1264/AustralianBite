import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="container-xxl py-5 bg-dark hero-header mb-5">
      <div className="container my-5 py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="display-3 text-white animated slideInLeft">
              Enjoy Our<br />Delicious Meal
            </h1>
            <p className="text-white animated slideInLeft mb-4 pb-2">
  Indulge in a world of flavors with our handcrafted meals. Fresh ingredients, bold flavors, and unforgettable dining experiences await you!
</p>

            <Link to="/menu" className="bttn py-sm-3 px-sm-5 me-3 animated slideInLeft">
              View Our Menu
            </Link>
          </div>
          <div className="col-lg-6 text-center text-lg-end overflow-hidden">
            <img className="img-fluid" src="./img/hero.png" alt="Hero Section" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
