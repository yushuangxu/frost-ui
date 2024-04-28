import React,{Children as ChildrenFN,useState,useEffect,useRef} from 'react'
import { TransitionStatus } from 'react-transition-group/Transition';
import { CSSTransition } from 'react-transition-group';

export default function Panel (props){
    const {isActive = false,} = props
    const childStyle = (child) => {
        return Object.assign({}, child && child.props ? child.props.style : {}, {
          transitionDuration: '300ms',
        });
      };
    const cls = [
        isActive?null:`frost-collapse-content-hidden`
    ].filter(Boolean).join(' ').trim()
    function getInstance  (status,instance)  {
        if(!instance){
            return
        }
        if(status === 'exited'||status === 'exiting'){
            instance.style.height = '1px'
        }
        if (status === 'entered' || status === 'entering') {
            instance.style.height = `${instance.scrollHeight}px`;
        }
    }
    const {children} = props
    return (
        <div className = {cls}>
            <CSSTransition in = {isActive} ummountOnExit={true} timeout={300}>
                {(TransitionStatus)=>React.cloneElement(<div >{children}</div>, {
                className: `frost-collapse-content`,
                style: childStyle(children),
                ref: (e) => getInstance(TransitionStatus, e),
            })}
            </CSSTransition>
        </div>
    )
}