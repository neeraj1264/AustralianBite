import "./GoogleMap.css";

const GoogleMap = () => {
  return (
    <>
    <address className="address" id="address">
    Find Us on <span className="highlight">Google Maps</span> 
        </address>
    <div className="map">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.0759059975635!2d76.60115010898824!3d29.977248474853024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e25003ad52a0f%3A0xf1f7bbf461140443!2sAustralian%20Bite!5e0!3m2!1sen!2sin!4v1738396033499!5m2!1sen!2sin"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    </>
  );
};

export default GoogleMap;
