import React from 'react';
import './PersonInfo.css'
import { Link } from 'react-router-dom';

const PersonInfo = ({people}) => {
  const {name, email, phone, website} = people;
  return (
    <div className='person-info'>
      <div>
      <h1>{name}</h1>
      <p>{email}</p>
      <p>{phone}</p>
      <p><Link to={website}>{website}</Link></p>
      </div>
    </div>
  );
};

export default PersonInfo;