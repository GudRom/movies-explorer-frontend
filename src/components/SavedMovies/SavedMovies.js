import React from "react";
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from "../MoviesCard/MoviesCard";

function SavedMovies(props) {
    return (
    <>
        <SearchForm 
            getSavedMoviesCard={props.getSavedMoviesCard}
            searchSavedMoviesCard={props.searchSavedMoviesCard}
            setInputSavedMoviesTitle={props.setInputSavedMoviesTitle}
            checkSavedMovies={props.checkSavedMovies}
            inputSavedMoviesTitle={props.inputSavedMoviesTitle}
            setCheckSavedMovies={props.setCheckSavedMovies}
            setSavedMoviesInfoText={props.setSavedMoviesInfoText}
        />
        <MoviesCardList
            savedMoviesInfoText={props.savedMoviesInfoText}
            preloader={props.preloader}
        >
            <ul className="movies__list">
                {props.ownMovies.map((item) => (
                    <MoviesCard
                        key={item._id}
                        {...item}
                        ownMovie={item}
                        ownMovies={props.ownMovies}
                        removeMovie={props.removeMovie}
                        movie={props.movies}
                    />
                ))}
            </ul>
        </MoviesCardList>
    </>
    )
}

export default SavedMovies;
