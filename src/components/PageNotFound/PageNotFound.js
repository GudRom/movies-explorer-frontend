import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
    return (
        <section className="error">
            <div className="error-box">
                <h1 className="error__header">404</h1>
                <p className="error__text">Страница не найдена</p>
                <Link to="/" className="error__button">Назад</Link>
            </div>
        </section>
    )
}

export default PageNotFound;