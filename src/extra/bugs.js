import React, { useState, useEffect } from 'react'



//react hooks同步问题一定要注意！！！！
export const Bugs = () => {
    const [count, setCount] = useState(0)

    function myEffect() {
        const I = setInterval(() => {
            console.log(count);
            setCount(count => count + 1);
        }, 1000)

        return () => clearInterval(I)
    }

    useEffect(myEffect, [count])//一定要清除Interval

    return (
        <div>
            {count}
        </div>
    )

}
