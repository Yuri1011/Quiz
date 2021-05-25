import React from "react";
import c from "./ActiveQuiz.module.css"
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = (props) => {
    return (
        <div className={c.ActiveQuiz}>
            <p className={c.Question}>
                <span>
                    <strong>1.</strong>&nbsp;{props.question}
                </span>
                <small>{props.answerNumber} из {props.quizLength}</small>
            </p>
            <AnswersList answers={props.answers} onAnswerClickHandler={props.onAnswerClickHandler} state={props.state}/>
        </div>
    )
}

export default ActiveQuiz;