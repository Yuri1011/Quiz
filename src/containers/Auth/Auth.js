import React from "react";
import c from "./Auth.module.css";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

class Auth extends React.Component {

    state = {
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Введите корректный email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Password',
                errorMessage: 'Введите корректный password',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    }

    loginHandler = () => {

    }
    registerHandler = () => {

    }
    submitForm = (e) => {
        e.preventDefault();
    }

    validateControl = (value, validation) => {
        if (!validation) {
            return true
        }
        let isValid = true;

        if (validation.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if (validation.email) {

        }
        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid;
        }

        return isValid;
    }

    onChangeHandler = (event, controlName) => {
        const formControls = {...this.state.formControls};
        const control = {...formControls[controlName]};

        control.value = event.target.value;
        control.touched = true;
        control.valid = this.validateControl(control.value, control.validation);

        formControls[controlName] = control;

        this.setState({
            formControls
        })

    }

    renderInputs = () => {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName];
            return (
                <Input key={controlName + index}
                       value={control.value}
                       valid={control.valid}
                       touched={control.touched}
                       label={control.label}
                       errorMessage={control.errorMessage}
                       shouldValidate={!!control.validation}
                       onChange={(event) => this.onChangeHandler(event, controlName)}
                       type={control.type}/>
            )
        })
    }

    render() {
        return (
            <div className={c.Auth}>
                <div>
                    <h1>Авторизация</h1>

                    <form onSubmit={this.submitForm} className={c.AuthForm}>

                        {
                            this.renderInputs()
                        }

                        <Button type={'success'} onClick={this.loginHandler}>Войти</Button>
                        <Button type={'primary'} onClick={this.registerHandler}>Авторизация</Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Auth;