import React, { useState, useRef ,useCallback} from 'react'


//每次setCount 之后，都会重新渲染一次dom,那么就会每次都创建一个add函数
const s = new Set();
export default function useCallbackExample() {
    const [count, setCount] = useState(0)
    function add() {
        setCount(count => count + 1)
    }
    s.add(add);
    console.log(s.size)//通过s.size可以看出来，每次都增加2
    return (
        <div>
            {count}
            <button onClick={add}>点我增加</button>
        </div>
    )
}


//用useCallback优化后的代码
// const sOpt = new Set();
// export const  useCallbackExampleOpt=()=> {
//     const [count, setCount] = useState(0)
//     const add = useCallback(
//         () => {
//              setCount(count => count + 1)
//         },
//         [],
//     )
//     sOpt.add(add);
//     console.log(sOpt.size)//只有两个？
//     return (
//         <div>
//             {count}
//             <button onClick={add}>点我增加</button>
//         </div>
//     )
// }


//weakSet 和set 垃圾回收机制 区别？？？
