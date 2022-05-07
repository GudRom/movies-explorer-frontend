import React from "react";
import landingLogo from '../../images/landing-logo.png'

function Promo() {
    return (
    <section className="promo">
        <div className="promo__background"></div>
        <h1 className="promo__header">Учебный проект студента факультета Веб-разработки.</h1>
        <img className="promo__image" src={landingLogo} alt="лэндинговая картинка"/>
    </section>
    )
}

export default Promo;
