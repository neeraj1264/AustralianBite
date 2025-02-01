import { Link } from "react-router-dom";
import "./AboutUs.css"; // Import the external CSS

const AboutUs = () => {
  return (
    <section className="about-container">
      <div className="about-grid">
        {/* Image Section */}
        <div className="about-image">
          <img src="/img/outer2.jpg" alt="Delicious Food" />
        </div>

        {/* Text Section */}
        <div className="about-text" id="about">
          <h2>
            About <span className="highlight">Us</span>
          </h2>
          <p>
            Welcome to our online food ordering platform! We bring you the best
            flavors, fresh ingredients, and fast delivery. Whether you're
            craving a quick bite or a full meal, we ensure a seamless
            experience, from browsing to checkout. <br />
            <br />
            Our mission is to deliver delicious meals right to your doorstep,
            maintaining top-notch hygiene and taste. Join thousands of happy
            customers who trust us for their daily meals! <br />
            <Link to="/menu" className="about-button">
              View Our Menu
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
