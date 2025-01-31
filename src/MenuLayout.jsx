import React, { useState } from 'react';
import Burger from './components/Pages/Burger/Burger';
import Pasta from './components/Pages/Pasta/Pasta';
import Category from './components/categories/Category';
import Sandwich from './components/Pages/Sandwich';
import Shake from './components/Pages/Shake';
import GarlicBread from './components/Pages/GarlicBread';
import Chinese from './components/Pages/Chinese';
import Wrap from './components/Pages/Wrap';
import Snacks from './components/Pages/Snacks';
import Momos from './components/Pages/Momos';
import Chaap from './components/Pages/Chaap';
import Dinner from './components/Pages/Dinner';
import Pizza from './components/Pages/Pizza/Pizza';
import Cakes from './components/Pages/cakes/Cakes';
import Naan from './components/Pages/Naan';
import Juice from './components/Pages/Juice';
import { IoMdCloseCircle } from "react-icons/io";

const menuItems = [
  { name: 'Burger', component: <Burger /> },
  { name: 'Pasta', component: <Pasta /> },
  { name: 'Sandwich', component: <Sandwich /> },
  { name: 'Shake', component: <Shake /> },
  { name: 'Garlic Bread', component: <GarlicBread /> },
  // { name: 'Chinese', component: <Chinese /> },
  { name: 'Wrap', component: <Wrap /> },
  { name: 'Snacks', component: <Snacks /> },
  // { name: 'Momos', component: <Momos /> },
  { name: 'Chaap', component: <Chaap /> },
  { name: 'Dinner', component: <Dinner /> },
  { name: 'Pizza', component: <Pizza /> },
  { name: 'Cakes', component: <Cakes /> },
  { name: 'Naan', component: <Naan /> },
  { name: 'Juice', component: <Juice /> },
];

const MenuLayout = () => {
  const [showCategory, setShowCategory] = useState(false); // State to toggle Category visibility
  const [searchText, setSearchText] = useState(""); // State to handle search input

  const toggleCategory = () => {
    if (!showCategory) {
      setSearchText(""); // Reset search input when hiding the search bar
    }
    setShowCategory(!showCategory); // Toggle between Category and Search Input
  };

  // Filter menu items based on search text
  const filteredMenuItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>

<div className="menu-items">
        {filteredMenuItems.map((item, index) => (
          <div key={index} className="menu-item">
            {item.component}
          </div>
        ))}
      </div>
      
  <h1 className="menu-btn" onClick={toggleCategory}>
        Menu
      </h1>

      {/* Render Categories Dynamically */}
      {showCategory && (
        <div className="outer-card">
            <button className="close-btn" onClick={() => setShowCategory(false)}>
            <IoMdCloseCircle/>
          </button>

      {/* Conditional Rendering */}
      {showCategory && <Category />}

      {/* Display Filtered Menu Items */}
      <div className="menu-items">
        {filteredMenuItems.map((item, index) => (
          <div key={index} className="menu-item">
            {item.component}
          </div>
        ))}
      </div>
      </div>
      )}
    </>
  );
};

export default MenuLayout;
