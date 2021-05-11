import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class home extends Component {
    render() {
        return (
            <div>
                <div>
                    <div>
                        基础hooks
                    </div>
                    <div style={{display:'flex',justifyContent:'space-around',flexDirection:'column'}}>
                        <Link to='/useState'>useState</Link>
                        <Link to='/useStateOrigin'>useStateOrigin</Link>

                        <Link to='/useEffect'>useEffect</Link>
                        <Link to='/useEffectOrigin'>useEffectOrigin</Link>

                        <Link to='/useContext'>useContext</Link>
                        <Link to='/useContextOrigin'>useContextOrigin</Link>
                    </div>
                    
                </div>
                <div>
                    <div>
                        进阶hooks
                    </div>
                    <div style={{display:'flex',justifyContent:'space-around',flexDirection:'column'}}>
                        <Link to='/useMemo'>useMemo</Link>
                        <Link to='/useCallBack'>useCallBack</Link>

                        <Link to='/useRef'>useRef</Link>
                        <Link to='/useCustomHooks'>useCustomHooks</Link>
                    </div>
                </div>

            </div>
        )
    }
}
