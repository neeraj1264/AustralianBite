import React from 'react';
import Cards from './Un-CustomizeCard/cards';
import { PaneerData } from '../data/FoodData';

const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Paneer = () => {
  
  return (
    <>
      <h2 id='Paneer' className='category-header'> Paneer</h2>
      {renderCards(PaneerData)}
    </>
  );
};

export default Paneer;
