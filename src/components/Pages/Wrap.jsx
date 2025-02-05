import React from 'react';
import Cards from './Un-CustomizeCard/cards';
import { WrapData } from '../data/FoodData';

const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Wrap = () => {
  
  return (
    <>
      <h2 id='Wrap' className='category-header'> Wrap</h2>
      {renderCards(WrapData)}
    </>
  );
};

export default Wrap;
