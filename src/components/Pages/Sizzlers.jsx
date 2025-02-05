import React from 'react';
import Cards from './Un-CustomizeCard/cards';
import { SizzlersData } from '../data/FoodData';

const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Sizzlers = () => {
  
  return (
    <>
      <h2 id='Sizzlers' className='category-header'>Sizzlers</h2>
      {renderCards(SizzlersData)}
    </>
  );
};

export default Sizzlers;
