import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header(props) {
    const location = useLocation();
    return (
        <>
        <header className="header">
            <Link to="/" className="header__logo" />
            {props.loggedIn ? (
                <>
                <nav className="header__navigation">
                    <ul className="header__list">
                        <li className="header__item"><Link to="/movies" className={`header__link ${location.pathname === "/movies" && "header__link_active"}`}>Фильмы</Link></li>
                        <li className="header__item"><Link to="/saved-movies" className={`header__link ${location.pathname === "/saved-movies" && "header__link_active"}`}>Сохранённые фильмы</Link></li>
                    </ul>
                    <Link to="/profile" className="header__account-button">Аккаунт</Link>
                </nav> 
                <button className="header__menu-button" onClick={props.onOpenPopup}></button>
                </>
            ) : (
                <nav className="header__navigation-main">
                    <ul className="header__list header__list_main">
                        <li className="header__item"><Link to="/signup" className="header__link">Регистрация</Link></li>
                    </ul>
                    <Link to="/signin" className="header__login-button">Войти</Link>
                </nav> 
            )}
        </header>
        </>
    )
}

export default Header;
