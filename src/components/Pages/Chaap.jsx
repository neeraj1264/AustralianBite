import React from 'react';
import Cards from './Un-CustomizeCard/cards';
import { ChaapData } from '../data/FoodData';

const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Chaap = () => {
  
  return (
    <>
      <h2 id='Chaap' className='category-header'> Chaap</h2>
      {renderCards(ChaapData)}
    </>
  );
};

export default Chaap;
