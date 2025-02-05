import React from 'react';
import Cards from './Un-CustomizeCard/cards';
import { NoodlesData } from '../data/FoodData';

const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Noodles = () => {
  
  return (
    <>
      <h2 id='Noodles' className='category-header'> Noodles</h2>
      {renderCards(NoodlesData)}
    </>
  );
};

export default Noodles;
