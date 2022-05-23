import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useFormWithValidation } from "../../utils/FormValidator";

function Auth(props) {
    const location = useLocation();
    const { name,
        email,
        password,
        handleChangeName,
        handleChangeEmail,
        handleChangePassword,
        errorName,
        errorEmail,
        errorPassword,
        isValidForm,
        resetForm } = useFormWithValidation();
    function handleSubmitReg(evt) {
        evt.preventDefault();
        props.handleRegistration(name, email, password);
    }

    function handleSubmitLog(evt) {
        evt.preventDefault();
        props.handleLogin(email, password);
        resetForm();
    }
    return (
        <div className="auth">
            <div className="auth__welcome-box">
                <Link to="/" className="auth__logo"></Link>
                <p className="auth__welcome">{props.welcomeText}</p>
            </div>
            <form className="auth__form" onSubmit={location.pathname === "/signup" ? handleSubmitReg : handleSubmitLog}>
                <ul className="auth__list">
                    {location.pathname === "/signup" && (
                    <li className="auth__item">
                        <label className="auth__label" htmlFor="name">Имя</label>
                        <input id="name" name="name" type="text" className="auth__input" required onChange={handleChangeName} value={name} minLength={2} maxLength={30}></input>
                        {errorName !== "" && <span className="auth__error">{errorName}</span>}
                    </li>  
                    )}
                    <li className="auth__item">
                        <label className="auth__label" htmlFor="email">E-mail</label>
                        <input id="email" name="email" type="email" className="auth__input" required onChange={handleChangeEmail} value={email}></input>
                        {errorEmail !== ""  && <span className="auth__error">{errorEmail}</span>}
                    </li>
                    <li className="auth__item">
                        <label className="auth__label" htmlFor="password">Пароль</label>
                        <input id="password" name="password" type="password" className={`auth__input ${props.authMessage !== "" && "auth__input_red"}`} required onChange={handleChangePassword} value={password}></input>
                        {errorPassword !== "" && <span className="auth__error">{errorPassword}</span>}
                        {props.authMessage !== "" && <span className="auth__error">{props.authMessage}</span>}
                    </li>
                </ul>
                    <button className="auth__button" type="submit" disabled={!isValidForm}>{props.buttonText}</button>
                <p className="auth__quest">{props.question} <Link to={props.linkTo} className="auth__link">{props.linkText}</Link></p>
            </form>
        </div>
    )
}

export default Auth;