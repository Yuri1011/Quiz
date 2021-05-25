import React from "react";
import c from "./AnswerItem.module.css"

const AnswerItem = (props) => {
    return (
        <li className={c.AnswerItem} onClick={() => props.onAnswerClickHandler(props.answer.id)}>
            {props.answer.text}
        </li>
    )
}

export default AnswerItem;