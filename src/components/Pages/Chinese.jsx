import React from 'react';
import { ChineseData } from '../data/FoodData';
import PizzaPage from './Pizza/PizzaPage';

const renderCards = (data) => {
  return data.map((item) => <PizzaPage key={item.id} {...item} />);
};
const Chinese = () => {
  
  return (
    <>
      <h2 id='chinese' className='category-header'>Delicious Chinese</h2>
      {renderCards(ChineseData)}
    </>
  );
};

export default Chinese;
