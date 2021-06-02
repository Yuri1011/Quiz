import React from "react";
import c from "./QuizCreator.module.css";
import Button from "../../components/UI/Button/Button";
import {createControl, validate, validateForm} from "../../components/form/formFramework";
import Input from "../../components/UI/Input/Input";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Select from "../../components/UI/Select/Select";

function createOptionControl(number) {
    return createControl({
        label: `Вариант ${number}`,
        errorMessage: 'Поле не может быть пустым',
        id: number,
    }, {required: true});
}

function createFormControls() {
    return {
        question: createControl({
            label: 'Введите вопрос.',
            errorMessage: 'Поле вопроса не может быть пустым'
        }, {required: true}),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4),
    }
}


class QuizCreator extends React.Component {

    state = {
        quiz: [],
        isFormValid: false,
        rightAnswerId: 1,
        formControls: createFormControls()
    }
    submitHandler = (event) => {
        event.preventDefault();
    }
    crateQuizHandler = () => {

    }
    addQuestionHandler = (event) => {
        event.preventDefault();
    }

    changeHandler = (value, controlName) => {
        const formControls = {...this.state.formControls};
        const control = {...formControls[controlName]};

        control.touched = true;
        control.value = value;
        control.valid = validate(control.value, control.validation);

        formControls[controlName] = control;

        this.setState({
            formControls,
            isFormValid: validateForm(formControls)
        })
    }
    renderControls = () => {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return (
                <Auxiliary key={controlName + index}>
                    <Input label={control.label}
                           valid={control.valid}
                           shouldValidate={!!control.validation}
                           touched={control.touched}
                           errorMessage={control.errorMessage}
                           onChange={event => this.changeHandler(event.target.value, controlName)}
                           value={control.value}/>
                    {index === 0 ? <hr/> : null}
                </Auxiliary>
            )
        })
    }

    selectChangeHandler = (event) => {
        this.setState({
            rightAnswerId: event.target.value
        })

    }

    render() {
        const select = <Select label={'Выберите правильный ответ'}
                               onChange={this.selectChangeHandler}
                               options={[
                                   {text: '1', value: 1},
                                   {text: '2', value: 2},
                                   {text: '3', value: 3},
                                   {text: '4', value: 4}
                               ]}
                               value={this.state.rightAnswerId}/>
        return (
            <div className={c.QuizCreator}>
                <div>
                    <h1>Создание теста.</h1>
                    <form onSubmit={this.submitHandler}>

                        {this.renderControls()}

                        {select}

                        <Button type={'primary'}
                                disabled={!this.state.isFormValid}
                                onClick={this.addQuestionHandler}>Добавить вопрос</Button>
                        <Button type={'success'}
                                disabled={this.state.quiz.length === 0}
                                onClick={this.crateQuizHandler}>Создать тест</Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default QuizCreator;
