import React, { PropsWithChildren, forwardRef } from 'react'
import cs from 'classnames'
import './style'
type BaseIconProps = {
    className?: string;
    style?: React.CSSProperties;
    size?: string | string[];
    spin?: boolean,

}

export type IconProps = BaseIconProps & Omit<React.SVGAttributes<SVGElement>, keyof BaseIconProps>;
export const getSize = (size: IconProps['size']) => {
    if (Array.isArray(size) && size.length === 2) {
        return size as string[]
    }
    const width = (size as string) || '1em'
    const height = (size as string) || '1em'
    return [width, height];
}
export const Icon = forwardRef<SVGSVGElement, PropsWithChildren<IconProps>>((props, ref) => {
    const { style,
        className,
        spin,
        size = '1em',
        children,
        ...rest
    } = props
    const cn = cs('icon', {
        'icon-spin': spin,
    }, className)
   
    const [width, height] = getSize(size)
    return (<svg ref={ref} width={width} className={cn} height={height} style={style} fill="currentColor" {...rest}>
        {children}
    </svg>)
})
