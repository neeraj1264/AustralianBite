import React from 'react';
import Cards from './Un-CustomizeCard/cards';
import { FriesData } from '../data/FoodData';

const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Fries = () => {
  
  return (
    <>
      <h2 id='Fries' className='category-header'>Fries</h2>
      {renderCards(FriesData)}
    </>
  );
};

export default Fries;
