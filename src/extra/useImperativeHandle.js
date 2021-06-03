/**
 * useInperativeHandle
 * 1.可以将子组件中(函数组件)中的方法拿到父组件中执行
 * 2.第三个参数是一个[],决定这个hook什么时候会再执行
 * 
 * 
 * 使用
 * 1.useImperativeHandle 应当与 forwardRef useRef()一起使用
 * 2.
 */

import React, { useRef, useImperativeHandle } from 'react';



// 子组件   React.forwardRef方法接受一个有额外ref参数的react组件函数
const FancyInput = React.forwardRef((props, ref) => {
  const inputRef = useRef();
  // 定义想让父组件执行的方法
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }),[]);

  return <input ref={inputRef} type="text" />
});

export default App = props => {
  const fancyInputRef = useRef();

  return (
    <div>
      <FancyInput ref={fancyInputRef} />
      <button
        onClick={() => fancyInputRef.current.focus()}
      >父组件调用子组件的 focus</button>
    </div>
  )
}

