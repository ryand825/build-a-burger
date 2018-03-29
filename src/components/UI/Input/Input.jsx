import React from 'react'

import classes from './Input.css';

const input = (props) => {
    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;
        case ('textarea'):
            inputElement = <textarea
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;
        case ('select'):
            inputElement = inputElement = <select
                value={props.value}
                onChange={props.changed}>
                {props.elementConfig.options.map(option => (
                    <option key={option.value} value={option.value}>{option.displayValue}</option>
                ))}
            </select>
            break;
        default:
            inputElement = <input
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;
    }
    return (
        <div className={classes.Input}>
            <label>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default input
