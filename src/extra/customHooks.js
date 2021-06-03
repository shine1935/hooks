/**
 * 自定义hook
 */

import React, { useState, useEffect } from 'react'

function sleep() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 200)
    })

}

//请求后返回了一些数据，请求返回的数据是状态
async function getPerson() {
    await sleep(200);//模拟接口请求，在这里停留200毫秒
    return ['小明', '小红', '小小']//之后返回一个数组
}

//然后使用状态
function usePerson() {
    const [list, setList] = useState(null);
    //发送请求是个作用，也就是effect
    async function request() {
        const listResponse = await getPerson()
        setList(listResponse)//list 
    }
    useEffect(request, []);
    return list
}



export const CustomHooks = () => {
    const list = usePerson();

    if (list === null) {
        return <div>loading...</div>
    }
    return <div>{
        list.map((name, i) => {
            return <li key={i}>{name}</li>
        })}</div>

}
