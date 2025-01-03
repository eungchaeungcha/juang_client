'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount((count) => count + 1);
  };

  const handleDecrease = () => {
    setCount((count) => count - 1);
  };

  return (
    <div>
      <h2>Counter Test</h2>
      <div>
        <h3>{count}</h3>
      </div>
      <div>
        <button onClick={handleIncrease}>plus</button>
        <button onClick={handleDecrease}>minus</button>
      </div>
    </div>
  );
}
