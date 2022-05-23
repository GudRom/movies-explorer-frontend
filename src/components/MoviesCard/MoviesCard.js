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


  return (
    <li className="movies__card">
        <div className="movies__poster">
            <img src={`https://api.nomoreparties.co${location.pathname === "/movies" ? props.image.url : props.image}`} alt={props.nameRU} className="movies__img"/>
            <div className="movies__overlay">
              <a className="movies__trailer-link" href={props.trailerLink} target="_blank" rel="noopener noreferrer"></a>
              {location.pathname === "/movies" ? (
                <button className={`movies__save-button ${isSaved && "movies__save-button_saved"}`} onClick={handleSaveClick}></button>
              ):(
                <button className="movies__delete-button" onClick={handleRemoveClick}></button>
              )}
            </div>
        </div>
        <div className="movies__title">
            <p className="movies__name">{props.nameRU}</p>
            <p className="movies__duration">{Math.floor(props.duration / 60)}ч {props.duration % 60}м</p>
        </div>
    </li>
  );
}

export default MoviesCard;
