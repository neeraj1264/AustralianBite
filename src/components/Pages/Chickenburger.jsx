import React from 'react';
import Cards from './Un-CustomizeCard/cards';
import { ChickenburgerData } from '../data/FoodData';

const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Chickenburger = () => {
  
  return (
    <>
      <h2 id='Chicken_burger' className='category-header'>Chicken_burger</h2>
      {renderCards(ChickenburgerData)}
    </>
  );
};

export default Chickenburger;
