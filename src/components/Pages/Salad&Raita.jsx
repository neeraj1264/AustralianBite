import React from 'react';
import Cards from './Un-CustomizeCard/cards';
import { SaladandRaitaData } from '../data/FoodData';

const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const SaladandRayta = () => {
  
  return (
    <>
      <h2 id='SaladandRayta' className='category-header'>Salad & Rayta</h2>
      {renderCards(SaladandRaitaData)}
    </>
  );
};

export default SaladandRayta;
