import React, { useState } from "react";
import { BiMessageDetail } from "react-icons/bi";
import { NavLink } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className=" text-white shadow-md fixed top-0 left-0 w-full z-50" style={{background: "var(--in)"}}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <a href="/" className="text-xl font-bold text-white">Australian Bite</a>
            </div>

            <nav className="hidden md:flex space-x-4">
              <a href="/" className="text-white hover:text-blue-400">Home</a>
              <a href="/about" className="text-white hover:text-blue-400">About</a>
              <a href="/services" className="text-white hover:text-blue-400">Services</a>
              <a href="/contact" className="text-white hover:text-blue-400">Contact</a>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white hover:text-blue-400 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block text-white hover:text-blue-400">Home</a>
            <a href="/about" className="block text-white hover:text-blue-400">About</a>
            <a href="/services" className="block text-white hover:text-blue-400">Services</a>
            <a href="/contact" className="block text-white hover:text-blue-400">Contact</a>
          </div>
        </div>
      </header>

    </>
  );
}

export default Header;
