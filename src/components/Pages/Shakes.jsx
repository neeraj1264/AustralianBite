import React from 'react';
import Cards from './Un-CustomizeCard/cards';
import { ShakeData } from '../data/FoodData';

const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Shake = () => {
  
  return (
    <>
      <h2 id='Shake' className='category-header'>Shake</h2>
      {renderCards(ShakeData)}
    </>
  );
};

export default Shake;
