import React from "react";
import c from "./Select.module.css";

const Select = (props) => {
    const htmlFor = `${props.label}-${Math.random()}`

    return (
        <div className={c.Select}>
            <label htmlFor={htmlFor}>
                {props.label}
            </label>
            <select id={htmlFor}
                    onChange={props.onChange}
                    value={props.value}>
                {props.options.map((option, index) => {
                    return (
                        <option key={option.value + index} value={option.value}>
                            {option.text}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default Select;