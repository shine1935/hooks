    // /**
    // * state返回内部变量_val的值
    // * setState将该内部变量设置为传参的值
    // *
    // */
   
    // function useState(initialValue) {
    //     var _val = initialValue;//_val是useState创建的本地变量
    //     function state() {
    //         return _val; //使用了由外层函数定义的_val
    //     }

    //     function setState(newVal) {
    //         _val = newVal;
    //     }

    //     return [state, setState] //将函数暴露给外部使用
    // }

    // var [foo, setFoo] = useState(0);//数组结构
    // console.log(foo())//打印0 - initialValue（初始值）

    // setFoo(1);//在useState作用域内设置_val的值
    // console.log(foo()) // 打印 1 - 虽然调用同一个方法，但返回新的 initialValue
