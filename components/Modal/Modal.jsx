import React from 'react'
import Button from '../Button'
import cancel from './image/cancel.png'
export default  function Modal(props) {
    const {title,visible,mask,handleOk,handleCancel,children}  = props
    console.log(visible)
    return(
        <div  className='modal' style={{display:visible?'block':'none'}}>
            <div className={`modal-item xCentered`} >
                <div className="modal-top">
                    <div className="modal-title">{title}</div>
                    <img className='modal-img' onClick={handleOk} src={cancel} alt="" />
                </div>
                <div className="modal-content">
                    { children }
                </div>
                <div className='modal-bottom'>
                    <Button type='text' onClick={handleOk}>取消</Button>
                    <Button classname ="modal-btn" onClick={handleCancel}>确定</Button>
                </div>
            </div>
            {
                mask && <div className='modal-mask'></div>
            }
        </div>
    )
}
Modal.defaultProps ={
    title:'',
    visible:false,
    mask:true,
    handleOk:()=>{},
    handleCancel:()=>{},
    children:''
}