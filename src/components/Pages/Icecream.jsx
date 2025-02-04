import React from 'react';
import Cards from './Un-CustomizeCard/cards';
import { IcecreamData } from '../data/FoodData';

const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Icecream = () => {
  
  return (
    <>
      <h2 id='Icecream' className='category-header'>Icecream</h2>
      {renderCards(IcecreamData)}
    </>
  );
};

export default Icecream;
