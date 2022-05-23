import React from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
function Profile(props) {    
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [errorName, setErrorName] = React.useState("");
  const [errorEmail, setErrorEmail] = React.useState("");
  const [isValidName, setIsValidName] = React.useState(false);
  const [isValidEmail, setIsValidEmail] = React.useState(false);
  const [isValidForm, setIsValidForm] = React.useState(false);

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  React.useEffect(() => {
      if (isValidEmail & isValidName) {
          setIsValidForm(true);
      } else {
          setIsValidForm(false);
      }
  }, [isValidEmail, isValidName])

  const handleChangeName = (evt) => { 
    setName(evt.target.value);
    const regexp = /^[a-zа-яё\-\ ]+$/i;
    if (regexp.test(evt.target.value) & (currentUser.name !== evt.target.value)) {
            setIsValidName(true);
            setErrorName("");
    } else {
            setIsValidName(false);
            setErrorName("Поле name содержит только латиницу, кириллицу, пробел или дефис. Минимум 2 символа, максимум 30");
    }
  };
  
  const handleChangeEmail = (evt) => {
    setEmail(evt.target.value);
    if (evt.target.validity.valid & (currentUser.email !== evt.target.value)) {
        setIsValidEmail(true);
        setErrorEmail("");
    } else {
        setIsValidEmail(false);
        setErrorEmail(evt.target.validationMessage);
    }
  };

  const handleSubmit = (evt) => {
      evt.preventDefault();
      props.updateUserInfo(name, email);
  }

    return (
        <div className="profile">
            <p className="profile__welcome">Привет, {name || "друг"}!</p>
            <form className="profile__form" onSubmit={handleSubmit}>
                <div className="profile__input-box">
                    <label className="profile__label" htmlFor="profile-name">Имя</label>
                    <input type="text" className="profile__input" id="profile-name" minLength={2} maxLength={30} onChange={handleChangeName} value={name || ""} required/>
                </div>
                <div className="profile__line"></div>
                <div className="profile__input-box">
                    <label className="profile__label" htmlFor="profile-email">E-mail</label>
                    <input type="email" className="profile__input" id="profile-email" onChange={handleChangeEmail} value={email || ""} required/>
                </div>
                {errorName !== "" && <span className="profile__error">{errorName}</span>}
                {errorEmail !== "" && <span className="profile__error">{errorEmail}</span>}
                {props.authMessage !== "" && <span className="profile__error">{props.authMessage}</span>}
                <button type="submit" className="profile__edit-button" disabled={!isValidForm}>Редактировать</button>
            </form>
            <button className="profile__button" onClick={props.logout} >Выйти из аккаунта</button>
        </div>
    )
}

export default Profile;