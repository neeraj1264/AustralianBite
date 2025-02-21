import React from 'react';
import { FruitData } from '../data/FoodData';
import PizzaPage from './Pizza/PizzaPage';

const renderCards = (data) => {
  return data.map((item) => <PizzaPage key={item.id} {...item} />);
};
const Fruit = () => {
  
  return (
    <>
      <h2 id='fruits' className='category-header'>Fruit Chaat</h2>
      {renderCards(FruitData)}
    </>
  );
};

export default Fruit;
