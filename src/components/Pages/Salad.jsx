import React from 'react';
import Cards from './Un-CustomizeCard/cards';
import { SaladData } from '../data/FoodData';

const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Salad = () => {
  
  return (
    <>
      <h2 id='Salad' className='category-header'>Salad</h2>
      {renderCards(SaladData)}
    </>
  );
};

export default Salad;
