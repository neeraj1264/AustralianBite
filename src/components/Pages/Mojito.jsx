import React from 'react';
import Cards from './Un-CustomizeCard/cards';
import { MojitoData } from '../data/FoodData';

const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Mojito = () => {
  
  return (
    <>
      <h2 id='Mojito' className='category-header'> Mojito</h2>
      {renderCards(MojitoData)}
    </>
  );
};

export default Mojito;
