import React from "react";
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(props) {
    return (
    <>
        <SearchForm />
        <MoviesCardList cards={props.cards} location={props.location} />
    </>
    )
}

export default SavedMovies;
