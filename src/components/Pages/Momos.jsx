import React from 'react';
import { MomosData } from '../data/FoodData';
import PizzaPage from './Pizza/PizzaPage';

const renderCards = (data) => {
  return data.map((item) => <PizzaPage key={item.id} {...item} />);
};
const Momos = () => {
  
  return (
    <>
      <h2 id='momos' className='category-header'>Delicious Momos</h2>
      {renderCards(MomosData)}
    </>
  );
};

export default Momos;
