
/**
    * Calendar类型按钮
    * @param {value}  days 传入的日期
    * @param {style}  Css css样式
    * @param {className}  string 按钮是否能点击
    * @param {dateRender} ReactNode 
    * @param {dateInnerContent} 定制单元格
    * @param {onChange} Function  点击回调函数
    * 
*/
import React, { CSSProperties, ReactNode, useState } from 'react'
import PropTypes from 'prop-types'
import './style/index';
import MonthCalendar from './components/MonthCalendar';
import Header from './components/Header';
import cs from 'classnames'
import dayjs, { Dayjs } from 'dayjs'

export interface CalendarProps {
    value: Dayjs,
    style?: CSSProperties;
    className?: string | string[],
    //定制日期显示
    dateRender?: (currentDate: Dayjs) => ReactNode,
    //定制日期单元格
    dateInnerContent?: (currentDate: Dayjs) => ReactNode
    onChange?: (date: Dayjs) => void

}
function Calendar(props: CalendarProps) {
    const { value, style, className, onChange, dateInnerContent, dateRender } = props
    const [curValue, setCurValue] = useState(value)
    const [curMonth, setCurMonth] = useState(value)
    const changeDate = (date:Dayjs) => {
        setCurValue(date)
        setCurMonth(date)
        onChange?.(date)
    }
    const selectHandler = (date:Dayjs) => {
        changeDate(date)
    }
    const prevMonthHandler = () => {
        setCurMonth(curMonth.subtract(1, 'month'))
    }
    const nextMonthHandler = () => {
        setCurMonth(curMonth.add(1, 'month'))
    }
    const todayHandler = () => {
        const date = dayjs(Date.now())
        changeDate(date)
    }
    const classNames = cs("calendar", className)
    return <div className={classNames} style={style}>
        <Header todayHandler={todayHandler}
            curMonth={curMonth}
            prevMonthHandler={prevMonthHandler}
            nextMonthHandler={nextMonthHandler} />
        <MonthCalendar
            value={curValue}
            curMonth={curMonth}
            selectHandler={selectHandler}
            dateInnerContent={dateInnerContent}
            dateRender={dateRender}
        />
    </div>
}
// Calendar.defaultProps ={
//     // value:dayjs(Date.now()),
//     // style:{},
//     onChange:()=>{},
//     className:'',
//     dateInnerContent:()=>{},
//     dateRender:()=>{}
// }
// Calendar.propTypes ={
//     // value:PropTypes.string,
//     // style:PropTypes.object,
//     onChange:PropTypes.func,
//     dateRender:PropTypes.func,
//     className:PropTypes.string,
//     dateInnerContent:PropTypes.func,
// }
export default Calendar;
