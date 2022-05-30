import React from "react";
import { useLocation } from "react-router-dom";
import Preloader from '../Preloader/Preloader'

function MoviesCardlist(props) {
  const location = useLocation()
  function checkInfoText() {
    if (props.infoText !== "" & location.pathname === "/movies") {
      return true;
    } else if (props.savedMoviesInfoText !== "" & location.pathname === "/saved-movies") {
      return true;
    } else {      
      return false; 
    }
}
    return (
    <section className="movies">
      {props.preloader ? (
        <Preloader />
      ) : (
        <>
        {checkInfoText() ? (
          <p className="movies__error">{location.pathname === "/movies" ? props.infoText : props.savedMoviesInfoText}</p>
        ) : (
          props.children
        ) 
        }
        </>
      )}
    </section>
    )
}

export default MoviesCardlist;