import React from 'react';
import Cards from '../Un-CustomizeCard/cards';
import { pastaData } from '../../data/FoodData';

const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Pasta = () => {
  
  return (
    <>
       <h2 id='Pasta' className='category-header'>Pasta</h2>
       {renderCards(pastaData)}
    </>
  );
};

export default Pasta;
