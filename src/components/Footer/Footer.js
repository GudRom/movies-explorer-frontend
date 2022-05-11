import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__line"></div>
            <div className="footer__footer">
                <p className="footer__copy">&copy; 2022</p>
                <ul className="footer__list">
                    <li className="footer__item"><a href="https://practicum.yandex.ru" className="footer__link" target="_blank" rel="noopened noreferrer">Яндекс.Практикум</a></li>
                    <li className="footer__item"><a href="https://github.com" className="footer__link" target="_blank" rel="noopened noreferrer">Github</a></li>
                    <li className="footer__item"><a href="https://facebook.com"  className="footer__link" target="_blank" rel="noopened noreferrer">Facebook</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;
