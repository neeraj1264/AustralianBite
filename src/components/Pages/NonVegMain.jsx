import React from 'react';
import { NonVegMainData } from '../data/FoodData';
import CustomCard from './CustomCard';

const renderCards = (data) => {
  return data.map((item) => <CustomCard key={item.id} {...item} />);
};
const NonVegMain = () => {
  
  return (
    <>
      <h2 id='Non_Veg_Main' className='category-header'>Non_Veg_Main</h2>
      {renderCards(NonVegMainData)}
    </>
  );
};

export default NonVegMain;
