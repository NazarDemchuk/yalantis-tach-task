import React from 'react'
import MonthItem from './MonthItem'

export default function YearList({users}) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December']

    return (
        <div id='year-calendar'>
            {months.map((month, id) => {
                return (
                    <MonthItem title={month} users={users[id]} key={id}/>
                )
            })}
        </div>
    )
}