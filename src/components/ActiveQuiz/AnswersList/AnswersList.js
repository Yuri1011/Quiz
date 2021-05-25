import React from "react";
import c from "./AnswersList.module.css"
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = (props) => {
    return (
        <ul className={c.AnswerList}>
            {props.answers.map((answer, index) => {
                return (
                    <AnswerItem key={index} answer={answer}/>
                )
            })}
        </ul>
    )
}

export default AnswersList;