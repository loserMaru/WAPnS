import React, { useMemo } from 'react';

let renderCount = 0;

function IsFive({ value }) {
  console.warn(`🔴 isFive render: ${++renderCount}`);

  const getResult = useMemo(() => {
    let i = 0;
    while (i < 600000000) i++;
    return value === 5 ? '✅ Это пять :D' : '❌ Это не пять :(';
  }, [value]);

  return <h3>{getResult}</h3>;
}

export default IsFive;
