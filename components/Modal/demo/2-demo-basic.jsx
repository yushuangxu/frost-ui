import React,{useState} from 'react'
import Modal from '../Modal'
import Button from '../../Button/Button'
import '../style'


export default ()=>{
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = ()=>{
        console.log(1)
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
}