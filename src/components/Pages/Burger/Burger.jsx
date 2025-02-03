import React from 'react';
import Cards from '../Un-CustomizeCard/cards';
import { BurgerData } from '../../data/FoodData';

const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Burger = () => {
  
  return (
    <>
      <h2 id='Burger' className='category-header'>Burgers</h2>
      {renderCards(BurgerData)}
    </>
  );
};

export default Burger;
