/**
 * 缓存界面上常用，但是不常改变的东西
 * V=f(state,props) useHooks...
 * 想在f中new Object();只创建一次
 * 一些复杂计算在状态改变后才做
 */

/**
 * 缓存一个函数(useCallback)
 * 缓存一个值(useMemo)
 */


//深拷贝和浅拷贝(缓存策略？？？)
//tips:可以使用useMemo减少重绘次数
import React, { useMemo, useState } from 'react'

export default function useMemoExample() {

    const [count, setCount] = useState(0);
    const memorizedText = useMemo(() => {
        return `第一次进入组件的时间为:${Date.now()}`
    }, [Math.floor(count/10)]);//每增加10，变化一次

    return (
        <div>
            {memorizedText}
            <p>点击了：{count}次</p>
            <button onClick={() => {setCount(count => count + 1) }}>点我增加</button>
        </div>
    )

}


// useMemo(()=>{
    
// })




