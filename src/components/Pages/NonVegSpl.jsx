import React from 'react';
import Cards from './Un-CustomizeCard/cards';
import { NonVegSplData } from '../data/FoodData';

const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const NonVegSpl = () => {
  
  return (
    <>
      <h2 id='Non_Veg_Special' className='category-header'>Non_Veg_Special</h2>
      {renderCards(NonVegSplData)}
    </>
  );
};

export default NonVegSpl;
