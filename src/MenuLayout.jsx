import React, { useState, useEffect } from "react";
import { allItems } from "./components/data/FoodData";
import CustomCard from "./components/Pages/CustomCard";
import { useCart } from "./ContextApi";

const MenuLayout = () => {
  const { cartItemsCount } = useCart();
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [searchText, setSearchText] = useState(""); // Search Input State
  const [showCategory, setShowCategory] = useState(false); // State to toggle Category visibility

  // Group items by category
  const groupedItems = allItems.reduce((acc, item) => {
    const { category } = item;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  // Filter items based on search text
  const filteredGroupedItems = Object.keys(groupedItems).reduce((acc, category) => {
    const filteredItems = groupedItems[category].filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    if (filteredItems.length > 0) {
      acc[category] = filteredItems;
    }
    return acc;
  }, {});

  const toggleCategory = () => {
    setShowCategory(!showCategory); // Toggle between Category and Search Input
    if (!showCategory) {
      setSearchText(""); // Reset search input when hiding the search bar
    }
  };

  // Scroll to the section when a category link is clicked
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = section.offsetTop - parseFloat(getComputedStyle(section).marginTop);
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
    setShowCategory(!showCategory);
  };

  useEffect(() => {
    if (cartItemsCount > 0) {
      setIsFooterVisible(true);
    } else {
      setIsFooterVisible(false);
    }
  }, [cartItemsCount]);

  return (
    <>
      {/* Menu Button and Search Bar */}
      <div className={`menu-btn-container ${isFooterVisible ? "footer-visible" : ""}`}>
      <input
          type="text"
          className="menu-search"
          placeholder="Search for items..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <h1 className="menu-btn" onClick={toggleCategory}>
          {!showCategory ? "Menu" : "Hide"}
        </h1>
      </div>

      {/* Render Categories Dynamically */}
      {showCategory && (
        <div className="outer-card">
          {Object.keys(filteredGroupedItems).map((category) => (
            <a
              key={category}
              href={`#${category}`} // This will link to the corresponding section
              onClick={() => scrollToSection(category)} // Scroll to section on click
            >
              <div className="category-card">
              <h2>{category}</h2>     
              <h3>{filteredGroupedItems[category].length}</h3>
                       </div>
            </a>
          ))}
        </div>
      )}

      {/* Render Filtered Items by Category */}
      <div className="menu-items">
        {Object.keys(filteredGroupedItems).length > 0 ? (
          Object.keys(filteredGroupedItems).map((category) => (
            <div key={category} id={category}> {/* Add ID for scrolling */}
              <h2 className="text-center">{category}</h2>
              <div className="category-items">
                {filteredGroupedItems[category].map((item) => (
                  <CustomCard key={item.id} {...item} />
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>No items found</p>
        )}
      </div>
    </>
  );
};

export default MenuLayout;
