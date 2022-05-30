import React from "react";
import { useLocation } from "react-router-dom";

function MoviesCard(props) {
  const location = useLocation();
  const isSaved = props.ownMovies.some((ownMovie) => ownMovie.movieId === props.movie.id);

  const handleSaveClick = () => {
    props.toggleSaveButton(props.movie);
  }

  const handleRemoveClick = () => {
    props.removeMovie(props.ownMovie);
  }

  const checkLocationOnClick = () => {
    if (location.pathname === "/movies") {
      return handleSaveClick();
    } 
    return handleRemoveClick();
  }


  return (
    <li className="movies__card">
        <div className="movies__poster">
            <img src={`https://api.nomoreparties.co${location.pathname === "/movies" ? props.image.url : props.image}`} alt={props.nameRU} className="movies__img"/>
            {isSaved ? (
              <>
              <a className="movies__trailer-link" href={props.trailerLink} target="_blank" rel="noopener noreferrer"></a>
              <button className={`movies__save-button movies__save-button_saved ${location.pathname === "/saved-movies" && "movies__delete-button"}`} onClick={checkLocationOnClick}></button>
              </>
            ) : (
              <div className="movies__overlay">
                <a className="movies__trailer-link" href={props.trailerLink} target="_blank" rel="noopener noreferrer"></a>
                <button className={`movies__save-button ${location.pathname === "/saved-movies" && "movies__delete-button"}`} onClick={checkLocationOnClick}></button>
              </div>
            )}
        </div>
        <div className="movies__title">
            <p className="movies__name">{props.nameRU}</p>
            <p className="movies__duration">{Math.floor(props.duration / 60)}ч {props.duration % 60}м</p>
        </div>
    </li>
  );
}

export default MoviesCard;
