import React from 'react';
import Cards from './Un-CustomizeCard/cards';
import { TacoData } from '../data/FoodData';

const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Taco = () => {
  
  return (
    <>
      <h2 id='Taco' className='category-header'>Taco</h2>
      {renderCards(TacoData)}
    </>
  );
};

export default Taco;
