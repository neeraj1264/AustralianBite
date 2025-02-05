import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Category.css";

const categories = [
    { id: 1, image: "/img/pizza.png",    itemCount: 3 , name: "Simple_Pizza"},
    { id: 3, image: "/img/pizza.png",    itemCount: 2 , name: 'Veg_1'},
    { id: 4, image: "/img/pizza.png",    itemCount: 4 , name: 'Veg_2'},
    { id: 5, image: "/img/pizza.png",    itemCount: 3 , name: 'Veg_3'},
    { id: 6, image: "/img/pizza.png",    itemCount: 2 , name: 'Combo_Pizza'},
    { id: 7, image: "/img/pizza.png",    itemCount: 4 , name: 'Taste_Of_India'},
    { id: 8, image: "/img/pizza.png",    itemCount: 4 , name: 'Non_Veg_Pizza'},
    { id: 9, image: "/img/pizza.png",    itemCount: 8 , name: 'Veg_burger'},
    { id:10, image: "/img/pizza.png",    itemCount: 6 , name: 'Chicken_burger'},
    { id:11, image: "/img/pizza.png",    itemCount: 5 , name: 'Non_Veg_Special'},
    { id:12, image: "/img/pizza.png",    itemCount: 4 , name: 'Non_Veg_Soup'},
    { id:13, image: "/img/pizza.png",    itemCount: 6 , name: 'Chicken_Snack'},
    { id:14, image: "/img/aloowrap.jpeg",itemCount: 5,  name: "Wrap" },
    { id:15, image: "/img/aloowrap.jpeg",itemCount: 4,  name: "Mojito" },
    { id:16, image: "/img/aloowrap.jpeg",itemCount: 7,  name: "Veg_Special" },
    { id:17, image: "/img/aloowrap.jpeg",itemCount:15,  name: "Main_Course" },
    { id:18, image: "/img/aloowrap.jpeg",itemCount:15,  name: "Non_Veg_Main" },
    { id:19, image: "/img/aloowrap.jpeg",itemCount: 3,  name: "Coffee" },
    { id:20, image: "/img/aloowrap.jpeg",itemCount:11,  name: "Shake" },
    { id:21, image: "/img/aloowrap.jpeg",itemCount: 5,  name: "Icecream" },
    { id:22, image: "/img/aloowrap.jpeg",itemCount: 4,  name: "Fries" },
    { id:23, image: "/img/aloowrap.jpeg",itemCount: 4,  name: "Salad" },
    { id:24, image: "/img/aloowrap.jpeg",itemCount: 4,  name: "Sandwich" },
    { id:25, image: "/img/aloowrap.jpeg",itemCount: 7,  name: "Sides" },
    { id:26, image: "/img/aloowrap.jpeg",itemCount: 3,  name: "Mushroom" },
    { id:27, image: "/img/aloowrap.jpeg",itemCount: 3,  name: "Main" },
    { id:28, image: "/img/aloowrap.jpeg",itemCount: 3,  name: "Combo" },
    { id:29, image: "/img/aloowrap.jpeg",itemCount: 3,  name: "Vegetable" },
    { id:30, image: "/img/aloowrap.jpeg",itemCount: 3,  name: "Maggie" },
    { id:31, image: "/img/aloowrap.jpeg",itemCount: 3,  name: "Paneer" },
    { id:32, image: "/img/aloowrap.jpeg",itemCount: 3,  name: "Noodles" },
    { id:33, image: "/img/aloowrap.jpeg",itemCount: 3,  name: "Momos" },
    { id:34, image: "/img/aloowrap.jpeg",itemCount: 3,  name: "Sizzlers" },
    { id:35, image: "/img/aloowrap.jpeg",itemCount: 3,  name: "Pasta" },
    { id:36, image: "/img/aloowrap.jpeg",itemCount: 3,  name: "VegSnacks" },
    { id:37, image: "/img/aloowrap.jpeg",itemCount: 3,  name: "Roti" },
    { id:38, image: "/img/aloowrap.jpeg",itemCount: 3,  name: "Tandoori_Non_Veg" },
  ];

function Category({ setShowCategory }) {
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
      const headerHeight = document.querySelector("header")?.offsetHeight || 60; // Adjust header height dynamically
      const offset = section.offsetTop - headerHeight - 10; // Add extra margin

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
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(category.name); // Ensure smooth scrolling first
            // setTimeout(() => setShowCategory(false), 300); 
          }}
          
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
