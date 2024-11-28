import React from 'react';
import { NavLink } from 'react-router-dom';

const SinglePart = ({data}) => {
     const {category}=data
     return (
          <div>
               <NavLink to={'/cards'}>{category}</NavLink>
          </div>
     );
};

export default SinglePart;