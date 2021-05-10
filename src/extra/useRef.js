/**
 * 在react之外做一些事情，比如:focus,媒体对象操作等
 * 通常搭配useEffect
 */


import React, { useRef, useState } from 'react'
import { Button } from 'antd'

export const UseRefExample=()=> {
    const refInput = useRef();
    return (
        <div>
            <input ref={refInput} />
            <Button onClick={
                () => {
                    refInput.current.focus();
                }
            }>Focus</Button>
        </div>
    )

}

//useRef缓存一个值
export const  UseRefSaveValue=()=> {
    const [counter, setCounter] = useState(0);
    const prev = useRef(null);//引用行为
    return (
        <div>
            <p>当前值：{counter}</p>
            <p>之前的值：{prev.current}</p>
            <Button onClick={() => {
                prev.current = counter;
                setCounter(x => {
                    console.log('x++',x)
                    return x+1;
                });
            }}>
                点我增加
            </Button>

            <Button onClick={() => {
                prev.current = counter;
                setCounter(x => {
                    console.log('x--',x);
                    return x-1
                });
            }}>
                点我减少
            </Button>

        </div>
    )

}
