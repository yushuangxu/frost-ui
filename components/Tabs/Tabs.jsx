import React, { Children as ChildrenFN, useState, useEffect, useRef } from 'react'

export default function Tabs(props) {
	const { defaultActiveKey, children, onChange, centered } = props
	//获取子节点的left偏移量
	const listRef = useRef();
	let [select_tabs_child, set_select_tabs_child] = useState('')
	let [current_key, set_current_key] = useState('')
	let [offsetLeft, set_offsetLeft] = useState(0)
	let [tab_item, set_tab_item] = useState([])

	let initChildren = () => {
		let tab_list = Array.isArray(children) ? children : [children]
		let tab_items = []
		if (tab_list.length !== tab_item.length) {
			ChildrenFN.forEach(tab_list, ({ key, props }) => {
				let tab_obj = Object.assign({ key }, props)
				tab_items.push(tab_obj)
			})
			set_tab_item(tab_items)
			setTimeout(() => {
				selectTab(defaultActiveKey, tab_items)
			}, 200)
		}

	}
	//选择当前item函数
	const selectTab = (key, tab_items) => {
		set_current_key(key)
		tabLinkLeft(key - 1)
		if (onChange) onChange(key)
		if (tab_item.length == 0) {
			const list = tab_items.find((item, index) => {
				return item.key === key
			})
			set_select_tabs_child(list.children)
		} else {
			const list = tab_item.find((item, index) => {
				return item.key === key
			})
			set_select_tabs_child(list.children)
		}

	}
	//更新bar的距离
	const tabLinkLeft = (index) => {
		let node = listRef.current.childNodes[index]
		set_offsetLeft(node.offsetLeft)
	}

	useEffect(() => {
		initChildren()
	}, [])
	return (
		<div className='tabs'>
			<div className={`tabs-list ${centered ? 'tabs-nav-wrap-centered' : ''}`} >
				<div className='tabs-nav-wrap' ref={listRef}>
					{tab_item.map(({ key, tab }) =>
						<div className={`tabs-item-title ${current_key == key && 'tabs-item-title-active'}`} onClick={() => { selectTab(key) }}>
							{tab}
						</div>
					)}
					<div className="tabs-ink-bar" style={{ left: offsetLeft }}></div>
				</div>
			</div>
			<div className='ant-tabs-content-holder'>
				{select_tabs_child}
			</div>
		</div>
	)
}