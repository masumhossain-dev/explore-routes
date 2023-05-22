import React from 'react';
import './Peoples.css';
import { useLoaderData } from 'react-router-dom';
import PersonInfo from '../PersonIfo/PersonInfo';

const Peoples = () => {
  const peoples = useLoaderData();
  return (
    <div className='peoples'>
      {
        peoples.map(people=><PersonInfo
          key={people.id}
          people={people}
        ></PersonInfo>)
      }
    </div>
  );
};

export default Peoples;