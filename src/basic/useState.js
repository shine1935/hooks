import React, { useState } from 'react';

export default function Example() {
  // 声明一个叫 "count" 的 state 变量,该变量通过setCount 来调用
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}


