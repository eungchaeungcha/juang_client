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
    <div className='w-full h-full gap-10 flex-center'>
      <h2>Counter Test</h2>
      <div>
        <h3>{count}</h3>
      </div>
      <div className='flex gap-4'>
        <button className='px-4 py-2 bg-orange-400 rounded-full' onClick={handleIncrease}>
          plus
        </button>
        <button className='px-4 py-2 bg-green-400 rounded-full' onClick={handleDecrease}>
          minus
        </button>
      </div>
    </div>
  );
}
