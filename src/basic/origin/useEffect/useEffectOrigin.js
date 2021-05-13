import React, { useState} from 'react';

let lastEffectDependencies
function useEffect(callback,dependencies){
    if(lastEffectDependencies){
        let changed = !dependencies.every((item,index)=>{
            return item === lastEffectDependencies[index]
        })
        if(changed){
            callback()
            lastEffectDependencies = dependencies
        }
    }else{ 
        callback()
        lastEffectDependencies = dependencies
    }
}


export default function App() {
    let [number, setNumber] = useState(0)
    useEffect(()=>{
        console.log(number);
    },[number])
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => setNumber(number+1)}>+</button>
        </div>
    )
}



/**
 * 
 * 
 * 
 * 1.引用外部变量
 * 2.调用外部函数
 * 
 * 宗旨：相同的输入一定会有相同的输出
 * 
 * 副作用的几种场景：
 * 
 * 1.dom操作，修改全局变量，ajax请求，计时器，存储相关
 * 一句话：和外部变量的交互都可以称为副作用
 * 
 * */