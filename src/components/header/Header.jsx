import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = ({ headerName, setSearch, onClick }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false); // Track visibility of search
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false); // Track logout modal visibility
  const [isDarkMode, setIsDarkMode] = useState(false); // Theme state
  const toggleButtonRef = useRef(null); // Ref for the toggle button
  const navigate = useNavigate();
  const location = useLocation();

  const closeNavbar = () => {
    if (toggleButtonRef.current) {
      toggleButtonRef.current.classList.remove("show"); // Remove the Bootstrap 'show' class
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

  const handleSearchChange = (event) => {
    setSearch(event.target.value); // Update search state
  };

  const toggleSearch = () => {
    setIsSearchVisible((prev) => !prev); // Toggle visibility
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      toggleSearch();

      if (toggleButtonRef.current) {
        toggleButtonRef.current.click(); // Trigger the button click programmatically
      }
    }
  };

  const handleLogout = () => {
    // Remove userBaseUrl from local storage
    localStorage.removeItem("userBaseUrl");
    localStorage.removeItem("advancedFeature");
    window.location.reload();
  };

  // Toggle theme between light and dark mode
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

  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
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
            {location.pathname === "/" && (
<>
            <li className="nav-item">
              <a
                href="#about"
                className="nav-link custom-text"
                onClick={closeNavbar}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#address"
                className="nav-link custom-text"
                onClick={closeNavbar}
              >
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#feedback"
                className="nav-link custom-text"
                onClick={closeNavbar}
              >
                Feedback
              </a>
            </li>
            </>
           )}
          </ul>
        </div>
      </div>
      {/* Logout Confirmation Modal */}
      {isLogoutModalOpen && (
        <div className="custom-modal-overlay">
          <div className="custom-modal-content">
            <p className="custom-modal-message">
              Are you sure you want to logout?
            </p>
            <div className="custom-modal-actions">
              <button
                className="custom-modal-button cancel-button"
                onClick={() => setIsLogoutModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="custom-modal-button confirm-button"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
