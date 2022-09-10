import React from 'react';
// import Conditional from './Conditional';
import Item from './Item';

const List = ({ list }) => {
    return (
      <ul>
        {list.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    );
  };

export default List