import React, { useState } from "react";
import { allItems } from "./components/data/FoodData";
import CustomCard from "./components/Pages/CustomCard";

const MenuLayout = () => {
  const [searchText, setSearchText] = useState(""); // Search Input State

  // Filter items based on search text
  const filteredItems = allItems.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      {/* Search Bar */}
      <div className="menu-btn-container">
        <input
          type="text"
          className="menu-search"
          placeholder="Search for items..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      {/* Render Filtered Items */}
      <div className="menu-items">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => <CustomCard key={item.id} {...item} />)
        ) : (
          <p>No items found</p>
        )}
      </div>
    </>
  );
};

export default MenuLayout;
