
/**
    * Button类型按钮
    * @param {onclick}  func 点击的函数
    * @param {type}  string 按钮的样式
    * @param {disabled}  boolean 按钮是否能点击
    * 
*/
import React from 'react'
import PropTypes from 'prop-types'
export default function Button  (props){
   
    let {onClick,type,disabled,children,classname} = props
   
   const handelEvent=()=>{
        if(disabled) return 
        if(onClick) onClick()
        console.log(onClick)
    }
    return(
        <div className={`frost-btn frost-btn-${type} ripple ${classname}` }  onClick={handelEvent}>
            <span>{children}</span>
        </div>
    )
}
Button.defaultProps ={
    onClick:()=>{},
    type:'primary',
    disabled:false,
    danger: false, // 危险
    classname:''
}
Button.propTypes ={
    onClick:PropTypes.func,
    type:PropTypes.string,
    disabled:PropTypes.bool,
    danger:PropTypes.bool,
    classname:PropTypes.string
}