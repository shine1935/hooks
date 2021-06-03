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
 * 1.react hooks的依赖项目可以按照数据类型分为基本数据类型和引用数据类型，
 * 当为基本数据类型时useEffect可以根据依赖项的变化而去发生改变，
 * 当为引用数据类型时，useEffect不会被触发，因为判断的是引用类型的地址，比较函数是Object.is()
 * object.is()判断的是两个值是否相等
 */



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


