import React from 'react';
import Cards from './Un-CustomizeCard/cards';
import { VegburgerData } from '../data/FoodData';

const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Vegburger = () => {
  
  return (
    <>
      <h2 id='Veg_burger' className='category-header'>Veg_burger</h2>
      {renderCards(VegburgerData)}
    </>
  );
};

export default Vegburger;
