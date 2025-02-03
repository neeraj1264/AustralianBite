import React from 'react';
import CustomCard from './CustomCard';
import { ChineseData } from '../data/FoodData';


const renderCards = (data) => {
  return data.map((item) => <CustomCard key={item.id} {...item} />);
};
const Chinese = () => {
  
  return (
    <>
      <h2 id='Chinese' className='category-header'> Chinese</h2>
      {renderCards(ChineseData)}
    </>
  );
};

export default Chinese;
