---
name:  Icon组件
route: /Icon
menu: 组件
---

import BasicDemo from './demo/1-demo-basic.jsx'

# Icon 组件

警告提示，展现需要关注的信息。

## 代码演示

<Playground>
    <BasicDemo />
</Playground>

### 基本用法
```javascript
import { createFromIconfont } from '../createFrontIconfont'
const IconFont = createFromIconfont('//at.alicdn.com/t/c/font_4443338_a2wwqhorbk4.js');

<IconFont type="icon-shouye-zhihui" size="40px"></IconFont>
<Icon />
```


## API

| 属性 | 说明     | 类型                                         | 默认值 |
| ---- | -------- | -------------------------------------------- | ------ |
| size | 按钮大小 | string
| spin | 是否添加动画 | boolean | false |
| className | 自定义className | '' | - |
