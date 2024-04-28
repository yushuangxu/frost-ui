import React from 'react'
import { Icon, IconProps } from './Icon'

const loadedSet = new Set<string>()
export function createFromIconfont(scriptUrl: string) {
    if (typeof scriptUrl === 'string' &&
        scriptUrl.length
        && !loadedSet.has(scriptUrl)) {
        if(typeof window !== 'undefined'){
            const script = document?.createElement('script')
            script.setAttribute('src', scriptUrl)
            script.setAttribute('data-namespace', scriptUrl)
            document?.body.appendChild(script)
            loadedSet.add(scriptUrl)
        }
       

    }

    const Iconfont = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
        const { type, ...rest } = props
        return (
            <Icon>
                {type ? <use xlinkHref={`#${type}`} /> : null}
            </Icon>
        )
    })
    return Iconfont
}