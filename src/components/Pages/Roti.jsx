import React from 'react';
import Cards from './Un-CustomizeCard/cards';
import { RotiData } from '../data/FoodData';

const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Roti = () => {
  
  return (
    <>
      <h2 id='Roti' className='category-header'>Roti</h2>
      {renderCards(RotiData)}
    </>
  );
};

export default Roti;
