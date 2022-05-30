import React, { useCallback } from "react";
import { useLocation } from "react-router-dom";

//хук управления формой и валидации формы
export function useFormWithValidation() {
    const location = useLocation();
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [errorName, setErrorName] = React.useState("");
    const [errorEmail, setErrorEmail] = React.useState("");
    const [errorPassword, setErrorPassword] = React.useState("");
    const [isValidName, setIsValidName] = React.useState(false);
    const [isValidEmail, setIsValidEmail] = React.useState(false);
    const [isValidPassword, setIsValidPassword] = React.useState(false);
    const [isValidForm, setIsValidForm] = React.useState(false);

    React.useEffect(() => {
        if (location.pathname === "/signup") {
            if (isValidEmail & isValidName & isValidPassword) {
                setIsValidForm(true);
            } else {
                setIsValidForm(false);
            }
        } else {
            if (isValidEmail & isValidPassword) {
                setIsValidForm(true);
            } else {
                setIsValidForm(false);
            }
        }
    }, [isValidEmail, isValidName, isValidPassword])

    const handleChangeName = (evt) => {
        setName(evt.target.value);
        const regexp = /^[a-zа-яё\-\ ]+$/i;
        if (regexp.test(evt.target.value) & evt.target.value.length > 2 & evt.target.value.length < 30) {
            setIsValidName(true);
            setErrorName("");
        } else if (evt.target.value.length === 0) {
            setIsValidName(false);
            setErrorName("Нужно заполнить");
        } else {
            setIsValidName(false);
            setErrorName("Поле name содержит только латиницу, кириллицу, пробел или дефис. Минимум 2 символа, максимум 30");
        }
    };

    const handleChangeEmail = (evt) => {
        setEmail(evt.target.value);
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/i;
        if (emailRegex.test(evt.target.value)) {
            setIsValidEmail(true);
            setErrorEmail("");
        } else if (evt.target.value.length === 0) {            
            setIsValidEmail(false);
            setErrorEmail("Нужно заполнить");
        } else {
            setIsValidEmail(false);
            setErrorEmail("Не похоже на email");
        }
      };

    const handleChangePassword = (evt) => {
        setPassword(evt.target.value);
        if (evt.target.value.length >= 8) {
            setIsValidPassword(true);
            setErrorPassword("");
        } else if (evt.target.value.length === 0) {
            setIsValidPassword(false);
            setErrorPassword("Нужно заполнить");
        } else {
            setIsValidPassword(false);
            setErrorPassword("Слишком короткий...");
        }
    };

    const resetForm = useCallback(
        (newValues = "", newErrors = "", newIsValid = false) => {
            setName(newValues);
            setEmail(newValues);
            setPassword(newValues);
            setErrorName(newErrors);
            setErrorEmail(newErrors);
            setErrorPassword(newErrors);
            setIsValidName(newIsValid);
            setIsValidEmail(newIsValid);
            setIsValidPassword(newIsValid);
        },
        [setName, setEmail, setPassword, setErrorName, setErrorEmail, setErrorPassword, setIsValidName, setIsValidEmail, setIsValidPassword]
    );

    return {
        name,
        email,
        password,
        handleChangeName,
        handleChangeEmail,
        handleChangePassword,
        errorName,
        errorEmail,
        errorPassword,
        isValidForm,
        resetForm
    };
}