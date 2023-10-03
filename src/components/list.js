import React from 'react';

function List(props) {
  const sortedList = props.item.sort((a, b) => a.name.localCompare(b.name));
  
    return (
      <ul>
        {sortedList.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    );
  }
  export default List;
  