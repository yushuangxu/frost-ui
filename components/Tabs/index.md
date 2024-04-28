---
name: Tabs 标签页组件
route: /Tabs
menu: 组件
---

import BasicDemo from './demo/tabs-demo-basic.jsx'

#  Tabs 标签页组件

警告提示，展现需要关注的信息。

## 代码演示

<Playground>
    <BasicDemo />
</Playground>

### 基本用法
```javascript
import {Tabs} from 'frost'
const TabPane = <div></div>
export default ()=>{
    function callback(key) {
        console.log(key);
    }
    return(
        <Tabs defaultActiveKey='2' onChange={callback} centered>
            <TabPane key='1' tab='第一个'><img src="" alt="" /></TabPane>
            <TabPane key='2' tab='第二个'>1111</TabPane>
            <TabPane key='3' tab='第三个'>1111</TabPane>
        </Tabs>
    )
}
```


## API

| 属性 | 说明     | 类型                                         | 默认值 |
| ---- | -------- | -------------------------------------------- | ------ |
| type | 按钮类型 | primary  dashed  link  text  default | primary |
| onClick | 点击回调函数 | function(e) | - |
| disabled | 按钮是否可以点击 | boolean | false |
| danger | 危险按钮 | boolean | false |
| classname | 自定义className | '' | - |
