import React, { useEffect, useState } from "react";
import Category from "./components/categories/Category";
import { IoMdCloseCircle } from "react-icons/io";
import Header from "./components/header/Header";
import PizzaPage from "./components/Pages/Pizza/PizzaPage";
import { useCart } from "./ContextApi";
import {
  allItems,
  BurgerData,
  ChaapData,
  DinnerData,
  GarlicBreadData,
  JuiceData,
  NaanData,
  pastaData,
  PizzaData,
  SandwichData,
  ShakesData,
  SnacksData,
  WrapData,
} from "./components/data/FoodData";
import Chaap from "./components/Pages/Chaap";
import Pizza from "./components/Pages/Pizza/Pizza";
import Pasta from "./components/Pages/Pasta/Pasta";
import Burger from "./components/Pages/Burger/Burger";
import GarlicBread from "./components/Pages/GarlicBread";
import Dinner from "./components/Pages/Dinner";
import Juice from "./components/Pages/Juice";
import Naan from "./components/Pages/Naan";
import Sandwich from "./components/Pages/Sandwich";
import Shake from "./components/Pages/Shake";
import Snacks from "./components/Pages/Snacks";
import Wrap from "./components/Pages/Wrap";

const menuItems = [
  { name: "Burger",  component: <Burger menu={true} />,  data: BurgerData,},
  { name: "Pasta ", component: <Pasta />, data: pastaData },
  { name: "Pizza", component: <Pizza />, data: PizzaData },
  { name: "Chaap", component: <Chaap />, data: ChaapData },
  { name: "GarlicBread", component: <GarlicBread />, data: GarlicBreadData },
  { name: "Dinner",  component: <Dinner />,  data: DinnerData,},
  { name: "Juice", component: <Juice />, data: JuiceData },
  { name: "Naan", component: <Naan />, data: NaanData },
  { name: "Sandwich", component: <Sandwich />, data: SandwichData,},
  { name: "Shakes", component: <Shake />, data: ShakesData },
  { name: "Snacks", component: <Snacks />, data: SnacksData },
  { name: "Wrap", component: <Wrap/>, data: WrapData },
];

const MenuLayout = ({ menu }) => {
  const [showCategory, setShowCategory] = useState(false); // State to toggle Category visibility
  const [searchText, setSearchText] = useState(""); // State to handle search input
  const [loading, setLoading] = useState(true); // Loading state to track the fetch status
  const [filteredMenuItems, setFilteredMenuItems] = useState(menuItems);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const { cartItemsCount } = useCart();

  const toggleCategory = () => {
    if (!showCategory) {
      setSearchText(""); // Reset search input when hiding the search bar
    }
    setShowCategory(!showCategory); // Toggle between Category and Search Input
  };

  useEffect(() => {
    setLoading(true);

    if (searchText.trim() === "") {
      setFilteredMenuItems(menuItems);
    } else {
      const matchedItems = allItems.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      );

      if (matchedItems.length > 0) {
        setFilteredMenuItems([
          {
            name: "Search Results",
            component: (
              <div className="search-results">
                {matchedItems.map((item) => (
                  <PizzaPage key={item.id} {...item} />
                ))}
              </div>
            ),
            data: matchedItems,
          },
        ]);
      } else {
        setFilteredMenuItems([
          {
            name: "Not Found",
            component: (
              <div className="not-found">
                <h2>No items found!</h2>
                <img src="/nofound.png" />
              </div>
            ),
            data: [],
          },
        ]);
      }
    }

    setLoading(false);
  }, [searchText]);

  useEffect(() => {
    if (cartItemsCount > 0) {
      setIsFooterVisible(true);
    } else {
      setIsFooterVisible(false);
    }
  }, [cartItemsCount]);

  useEffect(() => {
    localStorage.removeItem("tableNumber");
  }, []);

  return (
    <>
      <Header />

      <div
        className={`menu-btn-container ${
          isFooterVisible ? "footer-visible" : ""
        }`}
      >
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

      <div className={`menu-items ${isFooterVisible ? "footer-visible" : ""}`}>
        {loading ? (
          <h2 className="loading">Menu Loading...</h2>
        ) : (
          filteredMenuItems.map((item, index) => (
            <div
              key={index}
              className="menu-item"
              style={{ margin: menu ? "0" : " 5rem 1rem 1rem" }}
            >
              {/* Show category name only if not search results */}
              {item.name !== "Search Results" && (
                <h2 className="category-header"></h2>
              )}
              {item.component}
            </div>
          ))
        )}
      </div>

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
