import React from "react";
import { useLocation } from "react-router-dom";

function SearchForm(props) {
    const location = useLocation();
    function changeCheck() {
        location.pathname === "/movies" ? props.setCheck(!props.check) : props.setCheckSavedMovies(!props.checkSavedMovies);
    }

    function handleMovieChange(e) {
        location.pathname === "/movies" ? props.setInputTitle(e.target.value) : props.setInputSavedMoviesTitle(e.target.value);
    }

    function checkValueAndMaybeGetCards(e) {
        e.preventDefault();
        if (location.pathname === "/movies") {
            if (props.inputTitle !== "") { 
                props.getMoviesCard() 
            } else {
                props.setInfoText("Нужно ввести ключевое слово");                
            }
        } else if (props.inputSavedMoviesTitle !== "") { 
            props.getSavedMoviesCard()
        } else {
            props.setSavedMoviesInfoText("Нужно ввести ключевое слово");                
        }
    }

    return (
    <section className="search">
        <form className="search__form" onSubmit={checkValueAndMaybeGetCards}>
            <div className="search__block">
                <button className="search__img-button"></button>
                <input type="text" placeholder="Фильм" name="name" className="search__input" onChange={handleMovieChange} value={location.pathname === "/movies" ? props.inputTitle : props.inputSavedMoviesTitle || ""}></input>
                <button className="search__text-button">Найти</button>
            </div>
            <label className="search__checkbox" htmlFor="switch">
                <input type="checkbox" className="search__checkbox-switch" id="switch" checked={location.pathname === "/movies" ? props.check : props.checkSavedMovies} onChange={changeCheck} />
                Коротметражки
                <span className="search__slider"></span>
            </label>
        </form>
    </section>
    )
}

export default SearchForm;