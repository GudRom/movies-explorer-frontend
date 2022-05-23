import React from "react";
import Auth from "../Auth/Auth";

function Login(props) {
    return (
        <>
        <Auth 
            welcomeText="Рады видеть!"
            buttonText="Войти"
            question="Еще не зарегистрированы?"
            linkText="Регистрация"
            linkTo="/signup"
            authMessage={props.authMessage}
            handleLogin={props.handleLogin}
        />
        </>
    )
}

export default Login;