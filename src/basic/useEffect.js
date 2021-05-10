import React, { useState, useEffect } from 'react';

export default function Effect() {
  const [count, setCount] = useState(0);

  //它在第一次渲染之后和每次更新之后都会执行
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  },[1,2]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

/**
 * 清除effect副作用
 */

// import React, { useState, useEffect } from 'react';


// function useInterval(callback, time) {
//     useEffect(() => {
//         const I = setInterval(callback, time);
//         return () => {
//             clearInterval()
//         }
//     }, [])//基本类型、引用类型、Map、Error？？？？？

// }
// export default function Effect() {
//     const [count, setCount] = useState(0);

//     useInterval(() => {
//         setCount(count => count + 1);
//     }, 1000)

//     return (
//         <div>
//             <p>You clicked {count} times</p>
//             <button onClick={() => setCount(count + 1)}>
//                 Click me
//       </button>
//         </div>
//     );
// }


