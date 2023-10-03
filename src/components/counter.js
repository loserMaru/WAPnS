import React, { useState } from 'react';

function Counter(props) {
  const [count, setCount] = useState(props.count);

  const handleIncrement = () => {
    setCount(count + 1);
    props.onIncrement();
  };

  return (
    <div>
      <p>Счетчик: {count}</p>
      <button onClick={handleIncrement}>Увеличить</button>
    </div>
  );
}

export default Counter;
