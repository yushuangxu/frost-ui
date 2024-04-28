import React from 'react'
import Tabs from '../Tabs'
import '../style'
const TabPane = <div></div>
export default ()=>{
    function callback(key) {
        console.log(key);
    }
    return(
        <Tabs defaultActiveKey='2' onChange={callback} centered>
            <TabPane key='1' tab='第一个'><img src="" alt="" /></TabPane>
            <TabPane key='2' tab='第二个'>1111</TabPane>
            <TabPane key='3' tab='第三个'>3333</TabPane>
        </Tabs>
    )
}