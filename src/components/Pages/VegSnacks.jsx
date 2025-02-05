import React from 'react';
import Cards from './Un-CustomizeCard/cards';
import { VegSnacksData } from '../data/FoodData';

const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const VegSnacks = () => {
  
  return (
    <>
      <h2 id='VegSnacks' className='category-header'>VegSnacks</h2>
      {renderCards(VegSnacksData)}
    </>
  );
};

export default VegSnacks;
