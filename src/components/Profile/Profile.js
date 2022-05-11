import React from "react";

function Profile() {
    return (
        <div className="profile">
            <p className="profile__welcome">Привет, Роман!</p>
            <form className="profile__form">
                <div className="profile__input-box">
                    <label className="profile__label" htmlFor="profile-name">Имя</label>
                    <input type="text" className="profile__input" id="profile-name" value={"Роман"} />
                </div>
                <div className="profile__line"></div>
                <div className="profile__input-box">
                    <label className="profile__label" htmlFor="profile-email">E-mail</label>
                    <input type="email" className="profile__input" id="profile-email" value={"voyne@net.net"} />
                </div>
                <button type="submit" className="profile__edit-button">Редактировать</button>
            </form>
            <button className="profile__button">Выйти из аккаунта</button>
        </div>
    )
}

export default Profile;