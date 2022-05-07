import React from "react";

function SearchForm() {
    return (
    <section className="search">
        <form className="search__form">
            <div className="search__block">
                <button className="search__img-button"></button>
                <input type="text" placeholder="Фильм" name="name" className="search__input"></input>
                <button className="search__text-button">Найти</button>
            </div>
            <label className="search__checkbox" htmlFor="switch">
                <input type="checkbox" className="search__checkbox-switch" id="switch" />
                Коротметражки
                <span className="search__slider"></span>
            </label>
        </form>
    </section>
    )
}

export default SearchForm;