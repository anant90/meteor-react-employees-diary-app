import React from 'react';

const EmployeeDetail = ( {employee} ) => {  //using ES6 syntax instead of props
  const {name, email, phone,avatar} = employee;   //destructuring syntax
  return (
    <div className="thumbnail">
      <img src={avatar} />
      <div className="caption">
        <h3>{name}</h3>
        <ul className="list-group">
          <li className="list-group-item"> Email: {email}</li>
          <li className="list-group-item"> Phone: {phone}</li>
        </ul>
      </div>
    </div>
  );
};

export default EmployeeDetail;
