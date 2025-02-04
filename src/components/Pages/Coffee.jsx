import React from 'react';
import Cards from './Un-CustomizeCard/cards';
import { CoffeeData } from '../data/FoodData';

const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Coffee = () => {
  
  return (
    <>
      <h2 id='Coffee' className='category-header'>Coffee</h2>
      {renderCards(CoffeeData)}
    </>
  );
};

export default Coffee;
