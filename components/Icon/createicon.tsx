import React, {forwardRef} from 'react'
import {Icon,IconProps} from './Icon'

interface CreateIconProps extends IconProps{
  content: React.ReactNode;
  iconProps?: IconProps;
  viewBox?:string
}

export function createIcon(options:CreateIconProps){
    const {content,iconProps,viewBox = '0 0 1024 1024'} = options
    
    return forwardRef<SVGSVGElement,IconProps>((props,ref) => {
     
        return (
            <Icon {...iconProps} {...props} viewBox={viewBox} ref={ref}>
                {content}
            </Icon>
        )
    })
}