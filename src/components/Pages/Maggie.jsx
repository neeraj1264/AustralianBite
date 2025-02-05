import React from 'react';
import Cards from './Un-CustomizeCard/cards';
import { MaggieData } from '../data/FoodData';

const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Maggie = () => {
  
  return (
    <>
      <h2 id='Maggie' className='category-header'> Maggie</h2>
      {renderCards(MaggieData)}
    </>
  );
};

export default Maggie;
