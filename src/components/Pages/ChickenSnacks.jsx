import React from 'react';
import { ChickenSnackData } from '../data/FoodData';
import Cards from './Un-CustomizeCard/cards';

const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const ChickenSnack = () => {
  
  return (
    <>
      <h2 id='Chicken_Snack' className='category-header'>Chicken_Snack</h2>
      {renderCards(ChickenSnackData)}
    </>
  );
};

export default ChickenSnack;
