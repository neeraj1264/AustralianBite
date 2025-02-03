import React from 'react';
import CustomCard from './CustomCard';
import { ChaapData } from '../data/FoodData';

const renderCards = (data) => {
  return data.map((item) => <CustomCard key={item.id} {...item} />);
};
const Chaap = () => {
  
  return (
    <>
      <h2 id='Chaap' className='category-header'> Chaap</h2>
      {renderCards(ChaapData)}
    </>
  );
};

export default Chaap;
