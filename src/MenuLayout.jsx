import React, { useEffect, useState } from 'react';
import Category from './components/categories/Category';
import Wrap from './components/Pages/Wrap';
import { IoMdCloseCircle } from "react-icons/io";
import Header from './components/header/Header';
import SimplePizza from './components/Pages/Pizza/SimplePizza';
import Veg1 from './components/Pages/Pizza/Veg1';
import Veg2 from './components/Pages/Pizza/Veg2';
import Veg3 from './components/Pages/Pizza/Veg3';
import Combopizza from './components/Pages/Pizza/ComboPizza';
import TasteOfIndia from './components/Pages/Pizza/TasteOfIndia';
import NonVegPizza from './components/Pages/Pizza/NonVegPizza';
import ChickenSnack from './components/Pages/ChickenSnacks';
import NonVegSoup from './components/Pages/NonVegSoup';
import NonVegSpl from './components/Pages/NonVegSpl';
import Chickenburger from './components/Pages/Chickenburger';
import Vegburger from './components/Pages/Vegburger';
import Mojito from './components/Pages/Mojito';
import VegSpecial from './components/Pages/VegSpl';
import MainCourse from './components/Pages/VegMain';
import NonVegMain from './components/Pages/NonVegMain';
import Coffee from './components/Pages/Coffee';
import Shake from './components/Pages/Shakes';
import Icecream from './components/Pages/Icecream';
import Fries from './components/Pages/Fries';
import Salad from './components/Pages/Salad';
import Sandwich from './components/Pages/Sandwich';
import Sides from './components/Pages/Sides';
import Taco from './components/Pages/Taco';
import Mushrom from './components/Pages/Mushroom';
import Main from './components/Pages/Main';
import Combo from './components/Pages/Combo';
import Vegetable from './components/Pages/Vegetable';
import Maggie from './components/Pages/Maggie';
import Paneer from './components/Pages/Paneer';
import Noodles from './components/Pages/Noodles';
import Momos from './components/Pages/Momos';
import Sizzlers from './components/Pages/Sizzlers';
import Pasta from './components/Pages/Pasta';
import VegSnacks from './components/Pages/VegSnacks';
import Roti from './components/Pages/Roti';
import TandooriNonVeg from './components/Pages/TandooriNonVeg';
import Mushroom from './components/Pages/Mushroom';
import Chaap from './components/Pages/Chaap';
import SaladandRayta from './components/Pages/Salad&Raita';

const menuItems = [
  { name: 'Simple Veg', component: <SimplePizza /> },
  { name: 'Veg1 ', component: <Veg1 /> },
  { name: 'Veg2', component: <Veg2 /> },
  { name: 'Veg3', component: <Veg3 /> },
  { name: 'ComboPizza', component: <Combopizza /> },
  { name: 'Taste Of India', component: <TasteOfIndia /> },
  { name: 'Non Veg Pizza', component: <NonVegPizza /> },
  { name: 'Vegburger', component: <Vegburger /> },
  { name: 'Chickenburger', component: <Chickenburger /> },
  { name: 'NonVegSpl', component: <NonVegSpl /> },
  { name: 'NonVegSoup', component: <NonVegSoup /> },
  { name: 'ChickenSnack', component: <ChickenSnack /> },
  { name: 'Wrap', component: <Wrap /> },
  { name: 'Mojito', component: <Mojito /> },
  { name: 'VegSpecial', component: <VegSpecial /> },
  { name: 'MainCourse', component: <MainCourse /> },
  { name: 'NonVegMain', component: <NonVegMain /> },
  { name: 'Coffee', component: <Coffee /> },
  { name: 'Shake', component: <Shake /> },
  { name: 'Icecream', component: <Icecream /> },
  { name: 'Fries', component: <Fries /> },
  { name: 'Salad', component: <Salad /> },
  { name: 'Sandwich', component: <Sandwich /> },
  { name: 'Sides', component: <Sides /> },
  { name: 'Taco', component: <Taco /> },
  { name: 'Mushrom', component: <Mushroom /> },
  { name: 'Main', component: <Main /> },
  { name: 'Combo_Mix', component: <Combo /> },
  { name: 'Vegetable', component: <Vegetable /> },
  { name: 'Maggie', component: <Maggie /> },
  { name: 'Paneer', component: <Paneer /> },
  { name: 'Noodles', component: <Noodles /> },
  { name: 'Momos', component: <Momos /> },
  { name: 'Sizzlers', component: <Sizzlers /> },
  { name: 'Pasta', component: <Pasta /> },
  { name: 'Chaap', component: <Chaap /> },
  { name: 'SaladandRayta', component: <SaladandRayta /> },
  { name: 'VegSnacks', component: <VegSnacks /> },
  { name: 'Roti', component: <Roti /> },
  { name: 'TandooriNonVeg', component: <TandooriNonVeg /> },

];

const MenuLayout = () => {
  const [showCategory, setShowCategory] = useState(false); // State to toggle Category visibility
  const [searchText, setSearchText] = useState(""); // State to handle search input
  const [loading, setLoading] = useState(true); // Loading state to track the fetch status
  const [filteredMenuItems, setFilteredMenuItems] = useState(menuItems);

  const toggleCategory = () => {
    if (!showCategory) {
      setSearchText(""); // Reset search input when hiding the search bar
    }
    setShowCategory(!showCategory); // Toggle between Category and Search Input
  };

  useEffect(() => {
    setLoading(true); // Start loading when searchText changes
    // Filter the menuItems based on searchText
    const filteredItems = menuItems.filter(item =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredMenuItems(filteredItems); // Update filtered items
    setLoading(false);
  }, [searchText]);  // Re-run the effect when searchText changes

  return (
    <>
<Header/>
 <div className="menu-items">
        {loading ? (
        <h2 className='loading'>Menu Loading...</h2>
      ) : (
          filteredMenuItems.map((item, index) => (
            <div key={index} className="menu-item">
              {item.component}
            </div>
          ))
        )}
      </div>
      
  <h1 className="menu-btn" onClick={toggleCategory}>
        {!showCategory ? "Menu": "Hide"}
      </h1>

      {/* Render Categories Dynamically */}
      {showCategory && (
        <div className="outer-card">

      {/* Conditional Rendering */}
      {showCategory && <Category setShowCategory={setShowCategory} />}

      {/* Display Filtered Menu Items */}
     
      </div>
      )}
    </>
  );
};

export default MenuLayout;
