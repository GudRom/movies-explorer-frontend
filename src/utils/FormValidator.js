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
        if (regexp.test(evt.target.value)) {
            setIsValidName(true);
            setErrorName("");
        } else {
            setIsValidName(false);
            setErrorName("Поле name содержит только латиницу, кириллицу, пробел или дефис. Минимум 2 символа, максимум 30");
        }
    };

    const handleChangeEmail = (evt) => {
        setEmail(evt.target.value);
        if (evt.target.validity.valid) {
            setIsValidEmail(true);
            setErrorEmail("");
        } else {
            setIsValidEmail(false);
            setErrorEmail(evt.target.validationMessage);
        }
    };

    const handleChangePassword = (evt) => {
        setPassword(evt.target.value);
        if (evt.target.validity.valid) {
            setIsValidPassword(true);
            setErrorPassword("");
        } else {
            setIsValidPassword(false);
            setErrorPassword(evt.target.validationMessage);
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