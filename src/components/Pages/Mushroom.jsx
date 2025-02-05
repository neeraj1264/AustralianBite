import React from 'react';
import Cards from './Un-CustomizeCard/cards';
import { MushromData } from '../data/FoodData';

const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Mushroom = () => {
  
  return (
    <>
      <h2 id='Mushroom' className='category-header'> Mushroom</h2>
      {renderCards(MushromData)}
    </>
  );
};

export default Mushroom;
