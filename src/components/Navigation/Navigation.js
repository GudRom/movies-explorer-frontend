import React from "react";
import { Link } from "react-router-dom";

function Navigation(props) {
    return (
        <div className={`popup ${props.isOpen && "popup_active"}`}>
            <div className="popup__content">
                <button className="popup__close-button" onClick={props.onClose}></button>
                <nav className="popup__navigation">
                    <ul className="popup__list">
                        <li className="popup__item"><Link to="/" className={`popup__link ${props.location.pathname === "/" && "popup__link_active"}`}>Главная</Link></li>
                        <li className="popup__item"><Link to="/movies" className={`popup__link ${props.location.pathname === "/movies" && "popup__link_active"}`}>Фильмы</Link></li>
                        <li className="popup__item"><Link to="/saved-movies" className={`popup__link ${props.location.pathname === "/saved-movies" && "popup__link_active"}`}>Сохранённые фильмы</Link></li>
                    </ul>
                    <Link to="/profile" className="popup__button">Аккаунт</Link>
                </nav> 
            </div>
        </div>
    )
}

export default Navigation;