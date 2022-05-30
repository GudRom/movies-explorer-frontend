import React from "react";
import SearchForm from '../SearchForm/SearchForm';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies(props) {
    return (
    <>
        <SearchForm 
            inputTitle={props.inputTitle}
            setInputTitle={props.setInputTitle}
            getMoviesCard={props.getMoviesCard}
            setInfoText={props.setInfoText}
            check={props.check}
            setCheck={props.setCheck}
        />
        <MoviesCardList   
            infoText={props.infoText}
            preloader={props.preloader}
        >
            <ul className="movies__list">
                {props.movies.map((item) => (
                    <MoviesCard
                        key={item.id}
                        {...item}
                        movie={item}
                        toggleSaveButton={props.toggleSaveButton}
                        ownMovies={props.ownMovies}
                    />
                ))}
            </ul>
            {props.lastCard <= props.movies.length && <button type="submit" className="movies__more-button" onClick={props.getMore}>Ещё</button>}
        </MoviesCardList>
    </>
    )
}

export default Movies;
