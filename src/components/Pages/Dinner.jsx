import React from 'react';
import CustomCard from './CustomCard';
import { DinnerData } from '../data/FoodData';


const renderCards = (data) => {
  return data.map((item) => <CustomCard key={item.id} {...item} />);
};
const Dinner = () => {
  
  return (
    <>
      <h2 id='Dinner' className='category-header'> Dinner</h2>
      {renderCards(DinnerData)}
    </>
  );
};

export default Dinner;
