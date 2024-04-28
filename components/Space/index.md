---
name: Space 间距组件
route: /Space
menu: 组件
---

import BasicDemo from './demo/1-demo-basic.jsx'

# Space

警告提示，展现需要关注的信息。

## 代码演示

<Playground>
    <BasicDemo />
</Playground>

### 基本用法
```javascript
import {Space} from 'frost'

<Space  />
```


## API

| 属性 | 说明     | 类型                                         | 默认值 |
| ---- | -------- | -------------------------------------------- | ------ |
| type | 按钮类型 | primary  dashed  link  text  default | primary |
| onClick | 点击回调函数 | function(e) | - |
| disabled | 按钮是否可以点击 | boolean | false |
| danger | 危险按钮 | boolean | false |
| classname | 自定义className | '' | - |
