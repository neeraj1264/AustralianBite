import React from 'react';
import Cards from './Un-CustomizeCard/cards';
import { MainCourseData } from '../data/FoodData';

const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const MainCourse = () => {
  
  return (
    <>
      <h2 id='Main_Course' className='category-header'>Main_Course</h2>
      {renderCards(MainCourseData)}
    </>
  );
};

export default MainCourse;
