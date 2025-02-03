import React, { useEffect, useRef , useState} from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({ headerName, setSearch, onClick }) => {
  const toggleButtonRef = useRef(null); // Ref for the toggle button
  const [isDarkMode, setIsDarkMode] = useState(false); // Theme state


  // Function to toggle theme
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    if (isDarkMode) {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    }
  };

  // Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark-theme");
    }
  }, []);

  const closeNavbar = () => {
    if (toggleButtonRef.current) {
      toggleButtonRef.current.classList.remove("show"); // Remove the Bootstrap 'show' class
    }
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
        <i className="fa fa-utensils me-2"></i>
          Australian Bite
        </Link>
        <button
          ref={toggleButtonRef}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          ref={toggleButtonRef}
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link custom-text"
                to="/menu"
                onClick={closeNavbar}
              >
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link custom-text"
                onClick={closeNavbar}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-link custom-text"
                onClick={closeNavbar}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/address"
                className="nav-link custom-text"
                onClick={closeNavbar}
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/team"
                className="nav-link custom-text"
                onClick={closeNavbar}
              >
                Our Team
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/feedback"
                className="nav-link custom-text"
                onClick={closeNavbar}
              >
                Feedback
              </Link>
            </li>
            <li>
        {/* Dark Mode Toggle Button */}
        <button className="theme-toggle-btn" onClick={toggleTheme}>
            {!isDarkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
