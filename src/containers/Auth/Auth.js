import React from "react";
import c from "./Auth.module.css";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

class Auth extends React.Component {

    loginHandler = () => {

    }
    registerHandler = () => {

    }
    submitForm = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div className={c.Auth}>
                <div>
                    <h1>Авторизация</h1>

                    <form onSubmit={this.submitForm} className={c.AuthForm}>
                        <Input label={'Email'}/>
                        <Input label={'Password'}/>

                        <Button type={'success'} onClick={this.loginHandler}>Войти</Button>
                        <Button type={'primary'} onClick={this.registerHandler}>Авторизация</Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Auth;