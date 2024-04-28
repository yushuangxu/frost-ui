


import React from 'react'

export type SizeType = 'small' | 'medium' | 'large'|number|undefined;
export interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    style?: React.CSSProperties;
    size?:SizeType|[SizeType,SizeType];
    direction?:'horizontal'|'vertical';
    align?:'start'|'end'|'center'|'baseline';
    split?:React.ReactNode;
    wrap:boolean
}
const Space = () => {
  return (
    <div>Space</div>
  )
}
export default Space;