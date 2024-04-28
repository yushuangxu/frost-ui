---
name: Calendar 时间选择组件
route: /Calendar
menu: 组件
---

import BasicDemo from './demo/1-demo-basic.jsx'

# Calendar 日期选择器
## 代码演示

<Playground>
    <BasicDemo />
</Playground>

### 基本用法
```javascript
import {Calendar} from 'frost'

<Calendar  />
```


## API

| 属性 | 说明     | 类型                                         | 默认值 |
| ---- | -------- | -------------------------------------------- | ------ |
| value | 时间类型 | date类型 | Date.now() |
| onChange | 点击回调函数 | function(e) | - |
| style | 自定义样式 | css | css |
| dateRender | 定制日期显示,会完全覆盖日期单元格 | ReactNode | - |
| className | 自定义className | '' | - |
| dateInnerContent | 定制日期单元格,内容会被添加到单元格内 | ReactNode | - |
