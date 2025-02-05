import React from 'react';
import Cards from './Un-CustomizeCard/cards';
import { VegetablesData } from '../data/FoodData';

const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Vegetable = () => {
  
  return (
    <>
      <h2 id='Vegetable' className='category-header'> Vegetable</h2>
      {renderCards(VegetablesData)}
    </>
  );
};

export default Vegetable;
