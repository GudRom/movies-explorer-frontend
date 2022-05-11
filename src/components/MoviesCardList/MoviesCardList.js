import React from "react";
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardlist(props) {
    return (
    <section className="movies">
        <ul className="movies__list">
          {props.cards.map((item) => (
            <MoviesCard
              key={item._id}
              {...item}
              location={props.location}
            />
          ))}
        </ul>
        {props.location.pathname === "/movies" && <button type="submit" className="movies__more-button">Ещё</button>}
    </section>
    )
}

export default MoviesCardlist;