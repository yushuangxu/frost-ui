---
name: Modal 对话框组件
route: /Modal
menu: 组件
---

import BasicDemo from './demo/2-demo-basic.jsx'

# Modal 对话框

警告提示，展现需要关注的信息。

## 代码演示

<Playground>
    <BasicDemo />
</Playground>

### 基本用法

```javascript
import Modal from '../Modal'
import Button from '../../Button/Button'
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = ()=>{
        setIsModalVisible(true)
        
    }
    const handleOk = () => {
        setIsModalVisible(false)
    }
    const handleCancel =()=>{
        setIsModalVisible(false)
    }
    return(
        <>
        <Button onClick={showModal}>Open Modal</Button>
        <Modal title="Basic Modal" mask={true} visible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
        </>
    )
```

## API
| 属性 | 说明     | 类型                                         | 默认值 |
| ---- | -------- | -------------------------------------------- | ------ |
| title | 标题文字 | string | '' |
| mask | 背景蒙版 | boolean | true |
| visible | 显示隐藏 | boolean | false |
| handleOk | 点击确定回调 | function(e) | - |
| handleCancel | 点击取消回调 | function(e) | - |
