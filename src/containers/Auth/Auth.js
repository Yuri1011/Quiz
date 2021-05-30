import React from "react";
import c from "./Auth.module.css";
import Button from "../../components/UI/Button/Button";

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
                        <input type="text"/>
                        <input type="text"/>

                        <Button type={'success'} onClick={this.loginHandler}>Войти</Button>
                        <Button type={'primary'} onClick={this.registerHandler}>Авторизация</Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Auth;