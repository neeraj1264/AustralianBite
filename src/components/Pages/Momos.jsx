import React from 'react';
import Cards from './Un-CustomizeCard/cards';
import { MomosData } from '../data/FoodData';

const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Momos = () => {
  
  return (
    <>
      <h2 id='Momos' className='category-header'> Momos</h2>
      {renderCards(MomosData)}
    </>
  );
};

export default Momos;
