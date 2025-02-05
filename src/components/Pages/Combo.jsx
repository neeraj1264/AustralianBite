import React from 'react';
import Cards from './Un-CustomizeCard/cards';
import { ComboMixData } from '../data/FoodData';

const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Combo = () => {
  
  return (
    <>
      <h2 id='Combo' className='category-header'> Combo</h2>
      {renderCards(ComboMixData)}
    </>
  );
};

export default Combo;
