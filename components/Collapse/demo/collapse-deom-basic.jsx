import React from 'react'
import Collapse from '../Collapse'
import '../style'
const TabPane = <div></div>
export default ()=>{
    function callback(key) {
        console.log(key);
    }
    return(
        <Collapse>
            <TabPane key='1' header="This is panel header 1">111111</TabPane>
            <TabPane key='2' header="This is panel header 2">1111</TabPane>
            <TabPane key='3' header="This is panel header 3">3333</TabPane>
        </Collapse>
    )
}