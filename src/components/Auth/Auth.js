import React from "react";
import { Link } from "react-router-dom";

function Auth(props) {
    return (
        <div className="auth">
            <div className="auth__welcome-box">
                <Link to="/" className="auth__logo"></Link>
                <p className="auth__welcome">{props.welcomeText}</p>
            </div>
            <form className="auth__form">
                <ul className="auth__list">
                    {props.location.pathname === "/signup" && (
                    <li className="auth__item">
                        <label className="auth__label" htmlFor="name">Имя</label>
                        <input id="name" name="name" type="text" className="auth__input" required></input>
                    </li>  
                    )}
                    <li className="auth__item">
                        <label className="auth__label" htmlFor="email">E-mail</label>
                        <input id="email" name="email" type="email" className="auth__input" required></input>
                    </li>
                    <li className="auth__item">
                        <label className="auth__label" htmlFor="password">Пароль</label>
                        <input id="password" name="password" type="password" className="auth__input" required></input>
                        <span className="auth__error"></span>
                    </li>
                </ul>
                <button className="auth__button" type="submit">{props.buttonText}</button>
                <p className="auth__quest">{props.question} <Link to={props.linkTo} className="auth__link">{props.linkText}</Link></p>
            </form>
        </div>
    )
}

export default Auth;