import React from 'react';
import Cards from './Un-CustomizeCard/cards';
import { MainData } from '../data/FoodData';

const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Main = () => {
  
  return (
    <>
      <h2 id='Main' className='category-header'> Main</h2>
      {renderCards(MainData)}
    </>
  );
};

export default Main;
