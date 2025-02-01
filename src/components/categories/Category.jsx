import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Category.css";

const categories = [
  { id: 2, name: "Burger", image: "/img/burger.png", itemCount: 3 },
  { id: 3, name: "Sandwich", image: "/img/cornsand.jpg", itemCount: 4 },
  { id: 1, name: "Pizza", image: "/img/pizza.png", itemCount: 18 },
  { id: 4, name: "Pasta", image: "/img/pasta.png", itemCount: 5 },
  { id: 16, name: "Juice", image: "/img/juice/mix.jpeg", itemCount: 6 },
  { id: 5, name: "Shake", image: "/img/shakes.jpg", itemCount: 9 },
  { id: 13, name: "Cakes", image: "/img/cakes/choco.jpg", itemCount: 6 },
  { id: 6, name: "Garlic-Bread", image: "/img/gb.jpg", itemCount: 3 },
  { id: 8, name: "Wrap", image: "/img/aloowrap.jpeg", itemCount: 5 },
  { id: 9, name: "Snacks", image: "/img/bhalle.jpeg", itemCount: 2 },
  { id: 11, name: "Chaap", image: "/img/chaap1.jpg", itemCount: 5 },
  { id: 12, name: "Dinner", image: "/img/dalmakhani.jpeg", itemCount: 17 },
  { id: 14, name: "Naan", image: "/img/butternaan.jpeg", itemCount: 13 },
];

function Category() {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const hash = location.hash.substring(1);
    if (hash) {
      scrollToSection(hash);
    }
  }, [location]);

  // Scroll to the section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      const offset =
        section.offsetTop - parseFloat(getComputedStyle(section).marginTop);
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  // IntersectionObserver to track when a section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Use entry.target.id to set the active category
            setActiveCategory(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );
  
    // Observe all sections
    categories.forEach((category) => {
      const section = document.getElementById(category.name);
      if (section) {
        observer.observe(section);
      }
    });
  
    return () => {
      observer.disconnect();
    };
  }, []);  

  return (
    <div className="outer-card">
    {categories.map((category) => (
     <Link
     to={`#${encodeURIComponent(category.name)}`}
     key={category.id}
     onClick={() => setActiveCategory(category.name)} // Update active category directly when clicked
   >
     <h2
       className={`card-text ${
         activeCategory === category.name ? "active" : ""
       }`}
     >
       {category.name}
     </h2>
     <h2
       className={`item-count ${
         activeCategory === category.name ? "active" : ""
       }`}
     >
       {category.itemCount}
     </h2>
   </Link>   
    ))}
  </div>
  
  );
}

export default Category;
