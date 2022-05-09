import React from 'react';

const List = (props) => {
  return (
    <>
      <li>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </li>
    </>
  );
};

export default List;
