import React, { ReactNode } from 'react'
import '../style/index'
import { Dayjs } from 'dayjs';

function getAllDays(date:Dayjs) {
    const startDate = date.startOf('month');

    const day = startDate.day()
    const daysInfo = new Array(6 * 7)
    for (let i = 0; i < day; i++) {
        daysInfo[i] = {
            date: startDate.subtract(day - i, 'day'),
            currentMonth: false
        }
    }
    for (let i = 0; i < daysInfo.length; i++) {
        const calcDate = startDate.add(i - day, 'day')
        daysInfo[i] = {
            date: calcDate,
            currentMonth: calcDate.month() === date.month()
        }
    }
    return daysInfo

}
export interface MonthCalendarProps {

    //定制日期显示
    dateRender?: (currentDate: Dayjs) => ReactNode,
    //定制日期单元格
    dateInnerContent?: (currentDate: Dayjs) => ReactNode
    value: Dayjs,
    selectHandler?: (date: Dayjs) => void

    curMonth: Dayjs,

}
function renderDays(days: Array<{ date: Dayjs, currentMonth: boolean }>,
    dateRender: MonthCalendarProps['dateRender'],
    dateInnerContent: MonthCalendarProps['dateInnerContent'], value: Dayjs,
    selectHandler: MonthCalendarProps['selectHandler'],
) {

    const rows: JSX.Element[][] = []
    for (let i = 0; i < 6; i++) {
        const row: JSX.Element[] = []
        for (let j = 0; j < 7; j++) {
            const item = days[i * 7 + j]
            row[j] = <div className={`calendar-month-body-cell 
            ${item.currentMonth ? 'calendar-month-body-cell-current' : ''}
            ${value.format('YYYY-MM-DD') === item.date.format('YYYY-MM-DD') ?
                                'calendar-month-body-cell-selected' : ''}`}
                onClick={() => selectHandler?.(item.date)}>
                {dateRender ? dateRender(item.date) : (
                    <div className="calendar-month-body-cell-date">
                        <div className={`calendar-month-body-cell-date-value 
                        `}>
                            {item.date.date()}</div>
                        <div className="calendar-month-body-cell-date-content">{dateInnerContent?.(item.date)}</div>
                    </div>
                )}
            </div>

        }
        rows.push(row)
    }

    return rows.map((row, index) => <div key={index} className='calendar-month-body-row'>{row}</div>)
}
const MonthCalendar: React.FC<MonthCalendarProps> = (props) => {
    const weekList = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    const { dateRender, dateInnerContent, value, selectHandler, curMonth } = props
    const allDays = getAllDays(curMonth);
    return <div className="calendar-month">
        <div className="calendar-month-week-list">
            {weekList.map((week, index) => (
                <div className="calendar-month-week-list-item" key={week}>
                    {week}
                </div>
            ))}
        </div>
        <div className='calendar-month-body'>
            {renderDays(allDays, dateRender, dateInnerContent, value, selectHandler)}
        </div>
    </div>
}
export default MonthCalendar