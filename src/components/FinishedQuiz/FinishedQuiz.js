import React from "react";
import c from "./FinishedQuiz.module.css";
import Button from "../UI/Button/Button";

const FinishedQuiz = (props) => {
    const successCuunt = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++
        }
        return total;
    }, 0)
    return (
        <div className={c.FinishedQuiz}>
            <ul>
                {props.quiz.map((quizItem, index) => {
                    const cls = [
                        'fa',
                        props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                        c[props.results[quizItem.id]]
                    ]
                    return (
                        <li key={index}>
                            <strong>{index + 1}</strong>&nbsp;{quizItem.question}&nbsp;
                            <i className={cls.join(' ')}/>
                        </li>
                    )
                })}
            </ul>
            <p>Правильно {successCuunt} из {props.quiz.length}</p>
            <div>
                <Button onClick={props.onRetry} type='primary'>Повторить</Button>
                <Button  type='success'>Перейти в список тестов</Button>
            </div>
        </div>
    )
}

export default FinishedQuiz;