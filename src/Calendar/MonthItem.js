import React from 'react'
import ReactTooltip from 'react-tooltip';

export default function MonthItem(props) {
    const calculateBackgroundColor = amount => {
        if (amount < 3) return 'gray'
        else if (amount < 7) return 'blue'
        else if (amount < 11) return 'green'
        else return 'red'
    }
    const backgroundColor = calculateBackgroundColor(props.users)

    console.log(typeof props.users)

    return (
        <div>
            <div 
            className='month'
            style={{backgroundColor}}
            data-tip
            data-for={props.title}
            >
                {props.title}
            </div>
            <ReactTooltip id={props.title}>
                <span>Users: {props.users}</span>
            </ReactTooltip>
        </div>
    )
}