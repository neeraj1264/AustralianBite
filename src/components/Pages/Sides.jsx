import React from 'react';
import Cards from './Un-CustomizeCard/cards';
import { SidesData } from '../data/FoodData';

const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Sides = () => {
  
  return (
    <>
      <h2 id='Sides' className='category-header'>Sides</h2>
      {renderCards(SidesData)}
    </>
  );
};

export default Sides;
