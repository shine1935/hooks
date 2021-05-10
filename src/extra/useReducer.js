/**
 * useState的替代方案。
 * 接收(state,action)=>newState 的reducer
 * 返回当前的state以及配套的dispatch方案
 * 
 * 
 * useReducer比usestate更实用的场景：
 * 1.state逻辑复杂且包含多个子值
 * 2.下一个state依赖于之前的state
 * 
 * useReducer还能给触发深更新的组件做性能优化
 * 原理：传递的是dispatch而不是回调函数
 */

import React, { useReducer } from 'react'
import { Button } from 'antd'

function reducer(state, action) {
    console.log(state, action)
    switch(action.type){
        case "add":
            return state+1;
        case "sub":
            return state-1;
        default:
            throw '...'
    }
}
export default function Counter() {
    const [counter, dispatch] = useReducer(reducer, 0)
    return <div>
        Your counter is :{counter}
        <Button onClick={() => { dispatch({ type: 'add' }) }}>+</Button>
        <Button onClick={() => { dispatch({ type: 'sub' }) }}>-</Button>
    </div>
}