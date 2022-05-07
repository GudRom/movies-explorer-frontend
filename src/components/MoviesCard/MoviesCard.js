import React from "react";

function MoviesCard(props) {
  return (
    <li className="movies__card">
        <div className="movies__poster">
            <img src={props.img} alt="Поиск" className="movies__img"/>
            <div className="movies__overlay">
            {props.location.pathname === "/movies" ? (
            <button className="movies__save-button"></button>
            ):(
              <button className="movies__delete-button"></button>
              )}
            </div>
        </div>
        <div className="movies__title">
            <p className="movies__name">{props.name}</p>
            <p className="movies__duration">{Math.floor(props.duration / 60)}ч {props.duration % 60}м</p>
        </div>
    </li>
  );
}

export default MoviesCard;
