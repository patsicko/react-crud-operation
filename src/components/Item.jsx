import React from 'react'

 
const Item = ({ item }) => {
    return (
      <li >
        <span>{item.title}</span>
      </li>
    );
  };

export default Item