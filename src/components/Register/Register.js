import React from "react";
import Auth from "../Auth/Auth";

function Register(props) {

    return (
        <>
        <Auth 
            welcomeText="Добро пожаловать!"
            buttonText="Зарегистрироваться"
            question="Уже зарегистрированы?"
            linkText="Войти"
            linkTo="/signin"
            authMessage={props.authMessage}
            handleRegistration={props.handleRegistration}
        />
        </>
    )
}

export default Register;