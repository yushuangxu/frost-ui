import React,{Children as ChildrenFN,useState,useEffect,useRef} from 'react'
import { select } from 'underscore'
import left from './image/left.png'
import Panel from './Panel';
export default function Collapse (props){
    const listRef = useRef();
    const {defaultActiveKey,children,accordion = true} = props
    const [panel_item,setPanel_item] = useState([])
    const [active_key,set_active_key] = useState([])
    let initChildren = ()=> {
        let panel_list = Array.isArray(children)?children:[children]
        let panel_items = []
        if(panel_items !== panel_list.length){
            ChildrenFN.forEach(children,({key,props})=>{
              panel_items.push(Object.assign({key},props))
            })
            setPanel_item(panel_items)
        }
    }
    let onItemClick = (key)=>{
        let keys = active_key
        if(accordion) {
            keys = keys[0] === key?[]:[key]
        }
        set_active_key(keys)
    }
    useEffect(()=>{
        initChildren()
    },[])
    
    return (
        <div  className='frost-collapse'>
            <div className='frost-warp-list' ref={listRef}>
                {panel_item.map(({key,header,children})=>{
                        let isActive = false
                        isActive = active_key[0] === key
                        return(
                            <div className='frost-collapse-item' >
                                <div className='frost-collapse-header' onClick={()=>onItemClick(key)}>
                                    <img src={left} alt="" className={`${isActive?'frost-collapse-img':'frost-collapse-img-active'}`} />
                                    {header}
                                </div>
                                <Panel isActive={isActive} children = {children}></Panel>
                            </div>
                        )
                    }
                )}
            </div>
        </div>
    )
}