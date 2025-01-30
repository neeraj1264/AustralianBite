// AboutUs.js

import React from "react";
import OfferImg from "/img/offer.png";
import aboutUsImage from "/img/about.png";
import "./AboutUs.css"; 

const AboutUs = () => {

  const OfferDetail = () => {
    const whatsappNumber = "+917015823645";
    const message = `Hello! I'm interested in your "Buy 1 Get 1 Free Pizza" offer. Could you please provide me with more details? Thank you! `;
    const whatsappLink =
      "https://api.whatsapp.com/send?phone=" +
      whatsappNumber +
      "&text=" +
      encodeURIComponent(message);

    window.open(whatsappLink, "_blank");

  };

  return (
    <>
    <div className="about-us-container">
      <img src={OfferImg} alt="About Us" className="offer-image" onClick={() => OfferDetail()}/>
      <h3 className="about-heading">Why Foodies Hub?</h3>
      <img src={aboutUsImage} alt="About Us" className="about-us-image"/>
      <div className="about-us-content">
        <p>
        Discover a world of flavors under one roof, from hearty breakfasts to delectable dinners,
            and everything in between. Foodies Hub is your one-stop destination for a diverse culinary experience.
         </p>
         <p>
            Craving pizza, burgers, or a heavenly slice of cake? Look no further!
            Foodies Hub is the ultimate destination to satisfy all your culinary cravings in a single order.
          </p>
          <p>
            Immerse yourself in a world where quality meets variety. Foodies Hub takes pride in offering a curated
            selection of dishes, ensuring every bite is a delightful experience.
          </p>
      </div>
    </div>
    </>
  );
};

export default AboutUs;
