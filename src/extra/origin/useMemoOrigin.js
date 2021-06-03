import React ,{useState,memo,}from 'react';

let lastMemo
let lastMemoDependencies
function useMemo(callback,dependencies){
    if(lastMemoDependencies){
        let changed = !dependencies.every((item,index)=>{
            return item === lastMemoDependencies[index]
        })
        if(changed){
            lastMemo = callback()
            lastMemoDependencies = dependencies
        }
    }else{ // 没有传入依赖项
        lastMemo = callback()
        lastMemoDependencies = dependencies
    }
    return lastMemo
}
function Child({data}) {
    console.log("天啊，我怎么被渲染啦，我并不希望啊",data)
    return (
        <div>child</div>
    )
}

Child = memo(Child)// 查memo的api和用法

export default function App(){
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(20)
    let data = useMemo(()=> ({number}),[number])
    return (
        <div>
            
            <Child data={data}></Child>
            <button onClick={() => { setCount(count + 1)}}>
                增加
            </button>
        </div>
    );
}