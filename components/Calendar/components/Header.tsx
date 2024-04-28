import React from 'react'
import '../style/index'
import { Dayjs } from 'dayjs'
export interface HeaderProps{
    prevMonthHandler: () => void,
    nextMonthHandler: () => void,
    curMonth:Dayjs,
    todayHandler: () => void
}
function Header(props:HeaderProps) {
    const { prevMonthHandler, nextMonthHandler, curMonth, todayHandler } = props
    return <div className="calendar-header">
        <div className="calendar-header-left">
            <div onClick={() => { prevMonthHandler() }} className="calendar-header-icon">&lt;</div>
            <div className="calendar-header-value">{curMonth.format('YYYY 年 MM 月')}</div>
            <div className="calendar-header-icon" onClick={() => { nextMonthHandler() }}>&gt;</div>
            <button onClick={() => { todayHandler() }} className="calendar-header-btn">今天</button>
        </div>
    </div>
}

export default Header;
